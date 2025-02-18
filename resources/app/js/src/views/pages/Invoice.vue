<!-- =========================================================================================
    File Name: Invoice.vue
    Description: Invoice Page

========================================================================================== -->


<template>
    <div id="invoice-page">

        <div class="flex flex-wrap items-center justify-between">
          <vx-input-group class="mb-base mr-3">
            <vs-input v-model="mailTo" placeholder="Email" />

            <template slot="append">
              <div class="append-text btn-addon">
                <vs-button type="border" @click="mailTo = ''" class="whitespace-no-wrap">Send Invoice</vs-button>
              </div>
            </template>
          </vx-input-group>
          <div class="flex items-center">
            <vs-button class="mb-base mr-3" type="border" icon-pack="feather" icon="icon icon-download">Download</vs-button>
            <vs-button class="mb-base mr-3" icon-pack="feather" icon="icon icon-file" @click="printInvoice">Print</vs-button>
          </div>
        </div>

        <vx-card id="invoice-container">

            <!-- INVOICE METADATA -->
            <div class="vx-row leading-loose p-base">
                <div class="vx-col w-1/2 mt-base">
                    <img src="@assets/images/logo/logo.png" alt="vuexy-logo">
                </div>
                <div class="vx-col w-1/2 text-right">
                    <h1>Invoice</h1>
                    <div class="invoice__invoice-detail mt-6">
                        <h6>INVOICE NO.</h6>
                        <p>{{ invoiceDetails.invoiceNo }}</p>

                        <h6 class="mt-4">INVOICE DATE</h6>
                        <p>{{ invoiceDetails.invoiceDate | date(true) }}</p>
                    </div>
                </div>
                <div class="vx-col w-1/2 mt-12">
                    <h5>Recipient</h5>
                    <div class="invoice__recipient-info my-4">
                        <p>{{ recipientDetails.fullName }}</p>
                        <p>{{ recipientDetails.addressLine1 }}</p>
                        <p>{{ recipientDetails.addressLine2 }}</p>
                        <p>{{ recipientDetails.zipcode }}</p>
                    </div>
                    <div class="invoice__recipient-contact ">
                        <p class="flex items-center">
                            <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ recipientDetails.mailId }}</span>
                        </p>
                        <p class="flex items-center">
                            <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ recipientDetails.mobile }}</span>
                        </p>
                    </div>
                </div>
                <div class="vx-col w-1/2 mt-base text-right mt-12">
                    <h5>{{ companyDetails.name }}</h5>
                    <div class="invoice__company-info my-4">
                        <p>{{ companyDetails.addressLine1 }}</p>
                        <p>{{ companyDetails.addressLine2 }}</p>
                        <p>{{ companyDetails.zipcode }}</p>
                    </div>
                    <div class="invoice__company-contact">
                        <p class="flex items-center justify-end">
                            <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ companyDetails.mailId }}</span>
                        </p>
                        <p class="flex items-center justify-end">
                            <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ companyDetails.mobile }}</span>
                        </p>
                    </div>

                </div>
            </div>

            <!-- INVOICE CONTENT -->
            <div class="p-base">
                <!-- INVOICE TASKS TABLE -->
                <vs-table hoverFlat :data="invoiceData.tasks">
                    <!-- HEADER -->
                    <template slot="thead">
                        <vs-th class="pointer-events-none">TASK DESCRIPTION</vs-th>
                        <vs-th class="pointer-events-none">HOURS</vs-th>
                        <vs-th class="pointer-events-none">RATE</vs-th>
                        <vs-th class="pointer-events-none">AMOUNT</vs-th>
                    </template>

                    <!-- DATA -->
                    <template slot-scope="{data}">
                        <vs-tr v-for="(tr, index) in data" :key="index">
                            <vs-td :data="data[index].task">{{ data[index].task }}</vs-td>
                            <vs-td :data="data[index].hours">{{ data[index].hours }}</vs-td>
                            <vs-td :data="data[index].rate">{{ data[index].rate }} USD</vs-td>
                            <vs-td :data="data[index].amount">{{ data[index].amount }} USD</vs-td>
                        </vs-tr>
                    </template>
                </vs-table>

                <!-- INVOICE SUMMARY TABLE -->
                <vs-table hoverFlat class="w-1/2 ml-auto mt-4" :data="invoiceData">
                    <vs-tr>
                        <vs-th class="pointer-events-none">SUBTOTAL</vs-th>
                        <vs-td>{{ invoiceData.subtotal }} USD</vs-td>
                    </vs-tr>
                    <vs-tr>
                        <vs-th class="pointer-events-none">DISCOUNT ({{ invoiceData.discountPercentage }}%)</vs-th>
                        <vs-td>{{ invoiceData.discountedAmount }} USD</vs-td>
                    </vs-tr>
                    <vs-tr>
                        <vs-th class="pointer-events-none">TOTAL</vs-th>
                        <vs-td>{{ invoiceData.total }} USD</vs-td>
                    </vs-tr>
                </vs-table>
            </div>

            <!-- INVOICE FOOTER -->
            <div class="invoice__footer text-right p-base">
                <p class="mb-4">Transfer the amounts to the business amount below. Please include invoice number on your check.</p>
                <p>
                    <span class="mr-8">BANK: <span class="font-semibold">FTSBUS33</span></span>
                    <span>IBAN: <span class="font-semibold"> G882-1111-2222-3333 </span></span>
                </p>
            </div>
        </vx-card>
    </div>
</template>

<script>

export default{
  data () {
    return {
      mailTo: '',
      companyDetails: {
        name: 'Microsion Technologies Pvt. Ltd.',
        addressLine1: '9 N. Sherwood Court',
        addressLine2: 'Elyria, OH',
        zipcode: '94203',
        mailId: 'hello@pixinvent.net',
        mobile: '+91 999 999 9999'
      },
      recipientDetails: {
        fullName: 'Peter Stark',
        addressLine1: '8577 West West Drive ',
        addressLine2: 'Holbrook, NY',
        zipcode: '90001',
        mailId: 'peter@mail.com',
        mobile: '+91 988 888 8888'
      },
      invoiceDetails: {
        invoiceNo: '001/2019',
        invoiceDate: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)'
      },
      invoiceData: {
        tasks: [
          {
            id: 1,
            task: 'Website Redesign',
            hours: 60,
            rate: 15,
            amount: 90000
          },
          {
            id: 2,
            task: 'Newsletter template design',
            hours: 20,
            rate: 12,
            amount: 24000
          }
        ],
        subtotal: 114000,
        discountPercentage: 5,
        discountedAmount: 5700,
        total: 108300
      }
    }
  },
  computed: {

  },
  methods: {
    printInvoice () {
      window.print()
    }
  },
  components: {},
  mounted () {
    this.$emit('setAppClasses', 'invoice-page')
  }
}
</script>

<style lang="scss">
@media print {
  .invoice-page {
    * {
      visibility: hidden;
    }

    #content-area {
      margin: 0 !important;
    }

    .vs-con-table {
      .vs-con-tbody {
        overflow: hidden !important;
      }
    }

    #invoice-container,
    #invoice-container * {
      visibility: visible;
    }
    #invoice-container {
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: none;
    }
  }
}

@page {
  size: auto;
}
</style>

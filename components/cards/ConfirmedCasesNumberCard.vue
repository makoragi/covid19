<template>
  <v-col cols="12" md="6" class="DataCard">
    <new-patients-chart
      :date="Data.patients_summary.date"
      :daily-data="Data.patients_summary.data"
      :url="'https://www.pref.kumamoto.jp/kiji_22038.html'"
    />
    <!-- <time-bar-chart
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="Data.patients.date"
      :unit="$t('人')"
      :url="'https://www.pref.kumamoto.jp/kiji_22038.html'"
      :remarks="remarks"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '（注）陽性者における日付は、公表日ではなく、検査により陽性が確定された日'
              )
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart> -->
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
// import formatGraph from '@/utils/formatGraph'
// import TimeBarChart from '@/components/TimeBarChart.vue'
import NewPatientsChart from '@/components/NewPatientsChart.vue'

export default {
  components: {
    // TimeBarChart,
    NewPatientsChart
  },
  data() {
    // 感染者数グラフ
    // const patientsGraph = formatGraph(Data.patients_summary.data)

    const remarks = [
      '陽性者における日付は、公表日ではなく、検査により陽性が確定された日'
    ]

    const data = {
      Data,
      // patientsGraph,
      remarks
    }
    return data
  }
}
</script>

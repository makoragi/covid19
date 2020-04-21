<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-stacked-bar-chart
      :title="$t('検査実施数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-stacked-bar-chart-inspections'"
      :chart-data="inspectionsGraph"
      :date="Data.inspections_summary.date"
      :items="inspectionsItems"
      :labels="inspectionsLabels"
      :unit="$t('件.tested')"
      :url="'https://www.pref.kumamoto.jp/kiji_22038.html'"
    />
    <!-- 件.tested = 検査数 -->
  </v-col>
</template>

<i18n>
{
  "ja": {
    "検査実施数": "検査実施数",
    "都内": "都内",
    "県検査分(熊本市を除く)": "県検査分(熊本市を除く)",
    "熊本市検査分": "熊本市検査分",
    "件": {
      "tested": "件"
    }
  },
  "en": {
    "検査実施数": "Number of tests conducted",
    "県検査分(熊本市を除く)": "Tested by Pref. (excl. those by Kumamoto City)",
    "熊本市検査分": "Tested by Kumamoto City",
    "件": {
      "tested": "cases"
    }
  },
  "zh-cn": {
    "検査実施数": "送检件数",
    "県検査分(熊本市を除く)": "东京都案例（疑似感染、接触者调查）",
    "熊本市検査分": "其它（包机、游轮）",
    "件": {
      "tested": "件"
    }
  },
  "zh-tw": {
    "検査実施数": "送檢件數",
    "県検査分(熊本市を除く)": "東京都案例（疑似感染、接觸者調查）",
    "熊本市検査分": "其它（包機、遊輪）",
    "件": {
      "tested": "件"
    }
  },
  "ko": {
    "検査実施数": "검사실시수",
    "県検査分(熊本市を除く)": "도쿄 지역사회 발생 경우（의심환자, 접촉자）",
    "熊本市検査分": "기타（귀국자 또는 크루즈 승객 경우）",
    "件": {
      "tested": "건"
    }
  },
  "ja-basic": {
    "検査実施数": "けんさした かず",
    "県検査分(熊本市を除く)": "とうきょうとで びょうき かもしれない ひと",
    "熊本市検査分": "そのほか",
    "件": {
      "tested": "けん"
    }
  }
}
</i18n>

<script>
import Data from '@/data/data.json'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'

export default {
  components: {
    TimeStackedBarChart
  },
  data() {
    // 検査実施日別状況
    const inspectionsGraph = [
      Data.inspections_summary.data['熊本県'],
      Data.inspections_summary.data['熊本市']
    ]
    const inspectionsItems = [
      this.$t('県検査分(熊本市を除く)'),
      this.$t('熊本市検査分')
    ]
    const inspectionsLabels = Data.inspections_summary.labels

    const data = {
      Data,
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels
    }
    return data
  }
}
</script>

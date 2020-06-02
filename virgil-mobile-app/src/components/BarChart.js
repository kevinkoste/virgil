// React/Redux imports 
import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { selectDateRange } from '../redux/actions'
import moment from 'moment'

// Custom imports
import styles from '../styles/BarChart.styles'

export default class BarChart extends React.Component {

  constructor (props) {
    super(props)
    const rawChartData = [
      {label: 'July', year:2019, month:7, totalSpend: 1.4, dateOption: 8},
      {label: 'Aug.', year:2019, month:8, totalSpend: 3.7, dateOption: 7},
      {label: 'Sept.', year:2019, month:9, totalSpend: 6.1, dateOption: 6},
      {label: 'Oct.', year:2019, month:10, totalSpend: 2.8, dateOption: 5},
      {label: 'Nov.', year:2019, month:11, totalSpend: 3.7, dateOption: 4},
      {label: 'Dec.', year:2019, month:12, totalSpend: 2.9, dateOption: 3},
      {label: 'Jan.', year:2020, month:1, totalSpend: 2.0, dateOption: 1},
      {label: 'Feb.', year:2020, month:2, totalSpend: 1.0, dateOption: 0},
    ]

    const spendArray = rawChartData.map(item => item.totalSpend)
    const maxSpend = Math.max(...spendArray)
    const spendNorm = spendArray.map(item => item/maxSpend)
    this.chartData = rawChartData.map( (item, index) => ({...item, height: spendNorm[index]}))
  }

  render() {

    return (
      <ScrollView
        ref={ref => this.scrollView = ref}
        onContentSizeChange={() => {        
            this.scrollView.scrollToEnd({animated:true, duration: 700})
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        {this.chartData.map((item, index) => 
          <BarChartItem
            data={item}
            xLabel={item.label}
            yLabel={item.totalSpend}
            height={item.height}
            year={item.year}
            month={item.month}
            key={index}
            />
        )}
        <View style={{width:31}} />
      </ScrollView>
    )
  }
}

function BarChartItem (props) {
  // getting in props: xLabel, yLabel, height, year, month

  // props: height, labels, year, month
  const barWidth = 50
  const barHeight = 160

  // get dispatch
  const dispatch = useDispatch()

  // listen to store for data
  const selectedDateRange = useSelector(state => state.selectedDateRange)

  // creating datestamp to check foe membership in selectedDateRange
  const dateStamp = moment({year:props.year, month:props.month-1})

  // define local states
  const [chartValueSelected, setChartValueSelected] = useState(false)

  useEffect(() => {
    setChartValueSelected(
      dateStamp.isBetween(selectedDateRange.start, selectedDateRange.end, null, '[)')
    )
  }, [selectedDateRange])

  return (
    <TouchableOpacity
      onPress={() => {
        setChartValueSelected(true)
        dispatch(selectDateRange(props.data.dateOption))
      }}

      activeOpacity={0.8}
      style={{
        height:220,
        width:82,
        justifyContent:'flex-end',
        alignItems:'center',
        }}>

      <Text style={styles.rowSubtitle}>
        {props.yLabel}k
      </Text>

      <View
        style={{
          backgroundColor: (chartValueSelected) ? '#121212' : '#CCCCCC',
          width:barWidth,
          height:(props.height * barHeight),
          borderRadius: 3,
        }}
      />

      <Text style={styles.rowSubtitle}>
        {props.xLabel}
      </Text>

    </TouchableOpacity>
  )
}

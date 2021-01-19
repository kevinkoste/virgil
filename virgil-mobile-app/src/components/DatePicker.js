// React/Redux imports 
import React, { useState, useEffect } from 'react'
import { View, Text, Image, Picker, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { selectDateRange } from '../redux/actions'

// Community imports
import Modal from 'react-native-modal'

// Custom imports
import styles from '../styles/DatePickerStyles'
import { dateRangeOptions } from '../static/static-data'

export default function DatePicker (props) {

  // get assets
  const downChevron = require('../static/icons/down-chevron.png')

  // get dispatch to use in DatePicker and SpendingGraph
  const dispatch = useDispatch()
  
  // listen to store for selected date range
  const selectedDateRange = useSelector(state => state.selectedDateRange)

  // define local states
  const [localPickerValue, setLocalPickerValue] = useState(0)
	const [modalToggle, setModalToggle] = useState(false)
  const toggleModal = () => setModalToggle(!modalToggle)

  const exitModalAndDispatchAction = (dateOption) => {
    dispatch(selectDateRange(dateOption))
    toggleModal()
  }

  // listen to global state and change value of local picker
  useEffect(() => {
    setLocalPickerValue( dateRangeOptions.findIndex(item => item == selectedDateRange) )
  }, [selectedDateRange])

  return (
    <TouchableOpacity
      delayPressIn={5}
      activeOpacity={0.4}
      onPress={toggleModal}>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
          {selectedDateRange.label}
        </Text>
        <Image source={downChevron} style={styles.downChevron} />
      </View>

      <Modal
        isVisible={modalToggle}
        style={{justifyContent:'flex-end', alignItems:'center'}}
        backdropOpacity={0.8}
        onBackdropPress={() => exitModalAndDispatchAction(localPickerValue)}>
        <View style={styles.modalContainer}>

          <TouchableOpacity
            style={styles.modalExitContainer}
            onPress={() => exitModalAndDispatchAction(localPickerValue)}>
            <Text style={styles.modalExitText}>DONE</Text>
          </TouchableOpacity>

          <Picker
            selectedValue={localPickerValue}
            style={styles.pickerContainer}
            itemStyle={styles.pickerItems}
            onValueChange={(value) => {
              setLocalPickerValue(value)
            }}>
            {dateRangeOptions.map((item, index) =>
              <Picker.Item label={item.label} value={index} key={index}/>
            )}
          </Picker>

        </View>
      </Modal>
    </TouchableOpacity>
  )
}
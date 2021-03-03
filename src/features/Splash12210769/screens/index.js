import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_205} />
      <View style={styles.View_0_206}>
        <Text style={styles.Text_0_206}>52</Text>
      </View>
      <View style={styles.View_0_207}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ad8/5642/1531ef8c94f7f56205aeb99792090a01"
          }}
          style={styles.ImageBackground_I0_207_0_5713}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0664/a649/c23e73f02bdb36d5595f51776f816ad3"
          }}
          style={styles.ImageBackground_I0_207_0_5716}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e4c/1c6e/c8c18df2b57c5c743668bfc759849381"
          }}
          style={styles.ImageBackground_I0_207_0_5719}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e4c/1c6e/c8c18df2b57c5c743668bfc759849381"
          }}
          style={styles.ImageBackground_I0_207_0_5722}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4988/d9c4/6a36c473ce0afffb0d9c891e2ecb8410"
          }}
          style={styles.ImageBackground_I0_207_0_5725}
        />
      </View>
      <View style={styles.View_0_208}>
        <View style={styles.View_I0_208_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_205: {
    flexGrow: 1,
    width: 375,
    height: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_206: {
    width: 257,
    minWidth: 257,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 648
  },
  Text_0_206: {
    color: "rgba(241, 248, 252, 1)",
    fontSize: 202,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_207: {
    width: 80,
    height: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148,
    top: 367,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_207_0_5713: {
    flexGrow: 1,
    width: 69,
    height: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.23663330078125,
    top: 20.236572265625
  },
  ImageBackground_I0_207_0_5716: {
    flexGrow: 1,
    width: 39,
    height: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.23663330078125,
    top: 5.236572265625
  },
  ImageBackground_I0_207_0_5719: {
    flexGrow: 1,
    width: 60.21320343017578,
    height: 60.21320343017578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.630035400390625,
    top: 9.630126953125
  },
  ImageBackground_I0_207_0_5722: {
    flexGrow: 1,
    width: 60.21320343017578,
    height: 60.21320343017578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.630035400390625,
    top: 9.630126953125
  },
  ImageBackground_I0_207_0_5725: {
    flexGrow: 1,
    width: 60.21320343017578,
    height: 60.21320343017578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.630035400390625,
    top: 9.630126953125
  },
  View_0_208: {
    width: 134,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 774,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_208_0_5913: {
    flexGrow: 1,
    width: 134,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

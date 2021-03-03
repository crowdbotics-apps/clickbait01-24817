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
      <View style={styles.View_0_827} />
      <View style={styles.View_0_828}>
        <View style={styles.View_0_829} />
        <View style={styles.View_0_830} />
        <View style={styles.View_0_831}>
          <View style={styles.View_I0_831_0_5825} />
          <View style={styles.View_I0_831_0_5826}>
            <View style={styles.View_I0_831_0_5826_0_5695} />
          </View>
          <View style={styles.View_I0_831_0_5827}>
            <Text style={styles.Text_I0_831_0_5827}>Follow</Text>
          </View>
        </View>
        <View style={styles.View_0_832}>
          <Text style={styles.Text_0_832}>DarkKnight</Text>
        </View>
        <View style={styles.View_0_833}>
          <Text style={styles.Text_0_833}>Christian Bale</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1800/b799/b0aef68149a68e48f6ae8f707a25c006"
          }}
          style={styles.ImageBackground_0_834}
        />
      </View>
      <View style={styles.View_0_835}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d8b/6aeb/e4363bb16c6db8596ebebbe9460666cd"
          }}
          style={styles.ImageBackground_0_836}
        />
        <View style={styles.View_0_837}>
          <View style={styles.View_I0_837_0_5372}>
            <View style={styles.View_I0_837_0_5370} />
            <View style={styles.View_I0_837_0_5371} />
          </View>
          <View style={styles.View_I0_837_0_5373}>
            <View style={styles.View_I0_837_0_5373_0_5681} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_838}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b86b/4db6/7297737a7d464851f0e4ce4923f679a6"
          }}
          style={styles.ImageBackground_0_839}
        />
        <View style={styles.View_0_840}>
          <View style={styles.View_I0_840_0_5592}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c10/41ff/920c1fb51dd06731e17b8bd857ae76de"
              }}
              style={styles.ImageBackground_I0_840_0_5590}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a25b/c390/eec17c7974072eb6fb18330e7182fd88"
              }}
              style={styles.ImageBackground_I0_840_0_5591}
            />
          </View>
          <View style={styles.View_I0_840_0_5593}>
            <View style={styles.View_I0_840_0_5593_0_5681} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_841}>
        <View style={styles.View_0_842} />
        <View style={styles.View_0_843} />
        <View style={styles.View_0_844}>
          <View style={styles.View_I0_844_0_5825} />
          <View style={styles.View_I0_844_0_5826}>
            <View style={styles.View_I0_844_0_5826_0_5695} />
          </View>
          <View style={styles.View_I0_844_0_5827}>
            <Text style={styles.Text_I0_844_0_5827}>Follow</Text>
          </View>
        </View>
        <View style={styles.View_0_845}>
          <Text style={styles.Text_0_845}>jerome</Text>
        </View>
        <View style={styles.View_0_846}>
          <Text style={styles.Text_0_846}>Jerome Griffith</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecd8/060b/320148ad687746f3f40eeb12a6e11de4"
          }}
          style={styles.ImageBackground_0_847}
        />
      </View>
      <View style={styles.View_0_848}>
        <View style={styles.View_0_849} />
        <View style={styles.View_0_850} />
        <View style={styles.View_0_851}>
          <View style={styles.View_I0_851_0_5825} />
          <View style={styles.View_I0_851_0_5826}>
            <View style={styles.View_I0_851_0_5826_0_5695} />
          </View>
          <View style={styles.View_I0_851_0_5827}>
            <Text style={styles.Text_I0_851_0_5827}>Follow</Text>
          </View>
        </View>
        <View style={styles.View_0_852}>
          <Text style={styles.Text_0_852}>Johnson</Text>
        </View>
        <View style={styles.View_0_853}>
          <Text style={styles.Text_0_853}>Landon Johnson</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5882/3328/24daf65a1f575e2bcbdf7245ae3874e8"
          }}
          style={styles.ImageBackground_0_854}
        />
      </View>
      <View style={styles.View_0_855}>
        <View style={styles.View_0_856} />
        <View style={styles.View_0_857} />
        <View style={styles.View_0_858}>
          <View style={styles.View_I0_858_0_5817} />
          <View style={styles.View_I0_858_0_5818}>
            <View style={styles.View_I0_858_0_5818_0_5693} />
          </View>
          <View style={styles.View_I0_858_0_5819}>
            <Text style={styles.Text_I0_858_0_5819}>Following</Text>
          </View>
        </View>
        <View style={styles.View_0_859}>
          <Text style={styles.Text_0_859}>jacobsd</Text>
        </View>
        <View style={styles.View_0_860}>
          <Text style={styles.Text_0_860}>Derek Jacobs</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cff9/206c/d473ce0652336c509e3255976475017f"
          }}
          style={styles.ImageBackground_0_861}
        />
      </View>
      <View style={styles.View_0_862}>
        <View style={styles.View_0_863} />
        <View style={styles.View_0_864} />
        <View style={styles.View_0_865}>
          <View style={styles.View_I0_865_0_5817} />
          <View style={styles.View_I0_865_0_5818}>
            <View style={styles.View_I0_865_0_5818_0_5693} />
          </View>
          <View style={styles.View_I0_865_0_5819}>
            <Text style={styles.Text_I0_865_0_5819}>Following</Text>
          </View>
        </View>
        <View style={styles.View_0_866}>
          <Text style={styles.Text_0_866}>Andrea</Text>
        </View>
        <View style={styles.View_0_867}>
          <Text style={styles.Text_0_867}>Andrea Ruggeri</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43d0/e732/2d0486027f148b2a79b06707a5eb594c"
          }}
          style={styles.ImageBackground_0_868}
        />
      </View>
      <View style={styles.View_0_869}>
        <View style={styles.View_0_870} />
        <View style={styles.View_0_871} />
        <View style={styles.View_0_872}>
          <View style={styles.View_I0_872_0_5825} />
          <View style={styles.View_I0_872_0_5826}>
            <View style={styles.View_I0_872_0_5826_0_5695} />
          </View>
          <View style={styles.View_I0_872_0_5827}>
            <Text style={styles.Text_I0_872_0_5827}>Follow</Text>
          </View>
        </View>
        <View style={styles.View_0_873}>
          <Text style={styles.Text_0_873}>daych</Text>
        </View>
        <View style={styles.View_0_874}>
          <Text style={styles.Text_0_874}>Christian Day</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62e2/364b/b47560546db197101e412a1d7437ed44"
          }}
          style={styles.ImageBackground_0_875}
        />
      </View>
      <View style={styles.View_0_876}>
        <View style={styles.View_0_877} />
        <View style={styles.View_0_878} />
        <View style={styles.View_0_879}>
          <View style={styles.View_I0_879_0_5825} />
          <View style={styles.View_I0_879_0_5826}>
            <View style={styles.View_I0_879_0_5826_0_5695} />
          </View>
          <View style={styles.View_I0_879_0_5827}>
            <Text style={styles.Text_I0_879_0_5827}>Follow</Text>
          </View>
        </View>
        <View style={styles.View_0_880}>
          <Text style={styles.Text_0_880}>gill</Text>
        </View>
        <View style={styles.View_0_881}>
          <Text style={styles.Text_0_881}>Darrell Gill</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84a6/46bc/4ff8a73f995d28ab6021f3bb7f0fc206"
          }}
          style={styles.ImageBackground_0_882}
        />
        <View style={styles.View_0_883}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dba/4c81/ba17cc693c02426eaff0afc63098bcec"
            }}
            style={styles.ImageBackground_0_884}
          />
          <View style={styles.View_0_885}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9908/5515/93c2d4e88def54bf0d6b8d7529d31571"
              }}
              style={styles.ImageBackground_I0_885_0_5633}
            />
            <View style={styles.View_I0_885_0_5634}>
              <View style={styles.View_I0_885_0_5634_0_5681} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_886}>
        <View style={styles.View_0_887} />
        <View style={styles.View_0_888}>
          <View style={styles.View_I0_888_0_4948} />
          <View style={styles.View_I0_888_0_4949} />
          <View style={styles.View_I0_888_0_4950}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3b/e2fe/6ea0c2a3f45b57a1b0f3679d7e6702a4"
              }}
              style={styles.ImageBackground_I0_888_0_4950_0_5395}
            />
            <View style={styles.View_I0_888_0_4950_0_5397}>
              <View style={styles.View_I0_888_0_4950_0_5397_0_5697} />
            </View>
          </View>
          <View style={styles.View_I0_888_0_4951}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12f6/e5e2/20fe1fe0937b0030ec7cb15d1df5ee51"
              }}
              style={styles.ImageBackground_I0_888_0_4951_0_5229}
            />
            <View style={styles.View_I0_888_0_4951_0_5230}>
              <View style={styles.View_I0_888_0_4951_0_5230_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_888_0_4952}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71ed/97a1/da893e6a43849485a8ce320bd7c525c6"
              }}
              style={styles.ImageBackground_I0_888_0_4952_0_5111}
            />
            <View style={styles.View_I0_888_0_4952_0_5114}>
              <View style={styles.View_I0_888_0_4952_0_5114_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_888_0_4953}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c6d/0f78/2d571228c3f320769abb8100ec06f8d1"
              }}
              style={styles.ImageBackground_I0_888_0_4953_0_5541}
            />
            <View style={styles.View_I0_888_0_4953_0_5542}>
              <View style={styles.View_I0_888_0_4953_0_5542_0_4963} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_889}>
        <View style={styles.View_0_890}>
          <View style={styles.View_I0_890_0_5763} />
          <View style={styles.View_I0_890_0_5764}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae93/cb31/6761f7b5bc672720fd4048f6097ef73e"
              }}
              style={styles.ImageBackground_I0_890_0_5764_0_5073}
            />
            <View style={styles.View_I0_890_0_5764_0_5074}>
              <View style={styles.View_I0_890_0_5764_0_5074_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_890_0_5766}>
            <Text style={styles.Text_I0_890_0_5766}> </Text>
          </View>
          <View style={styles.View_I0_890_0_5768}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356f/d3a4/54158a0a2323fa83fa7cf77c2dcb2103"
              }}
              style={styles.ImageBackground_I0_890_0_5768_0_5265}
            />
            <View style={styles.View_I0_890_0_5768_0_5266}>
              <View style={styles.View_I0_890_0_5768_0_5266_0_4963} />
            </View>
          </View>
        </View>
        <View style={styles.View_0_891}>
          <View style={styles.View_0_892} />
          <View style={styles.View_0_893} />
          <View style={styles.View_0_894}>
            <Text style={styles.Text_0_894}>FOLLOWERS</Text>
          </View>
          <View style={styles.View_0_895}>
            <Text style={styles.Text_0_895}>INVITE</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_896}>
        <View style={styles.View_I0_896_0_5883}>
          <View style={styles.View_I0_896_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_896_0_5885}
          />
          <View style={styles.View_I0_896_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_896_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_896_0_5893}
        />
        <View style={styles.View_I0_896_0_5896}>
          <Text style={styles.Text_I0_896_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_897}>
        <View style={styles.View_I0_897_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_827: {
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
  View_0_828: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 600
  },
  View_0_829: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_830: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_831: {
    width: 70,
    minWidth: 70,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 265,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_831_0_5825: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_831_0_5826: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_831_0_5826_0_5695: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_831_0_5827: {
    flexGrow: 1,
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.942626953125,
    top: 6
  },
  Text_I0_831_0_5827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_832: {
    width: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 43.5
  },
  Text_0_832: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_833: {
    width: 103,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 22.5999755859375
  },
  Text_0_833: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_834: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_835: {
    width: 58,
    minWidth: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277,
    top: 532
  },
  ImageBackground_0_836: {
    width: 58,
    height: 58,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_837: {
    width: 16,
    height: 16,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_837_0_5372: {
    flexGrow: 1,
    width: 12.30769157409668,
    height: 14.15384578704834,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.84619140625,
    top: 1.23077392578125
  },
  View_I0_837_0_5370: {
    width: 9.846153259277344,
    height: 9.230768203735352,
    top: 4.923095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.230712890625,
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I0_837_0_5371: {
    width: 12.30769157409668,
    height: 3.692307949066162,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_I0_837_0_5373: {
    flexGrow: 1,
    width: 12.30769157409668,
    height: 14.15384578704834,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.84619140625,
    top: 1.23077392578125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_837_0_5373_0_5681: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_838: {
    width: 58,
    minWidth: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 209,
    top: 532
  },
  ImageBackground_0_839: {
    width: 58,
    height: 58,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_840: {
    width: 16,
    height: 16,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_840_0_5592: {
    flexGrow: 1,
    width: 14.153846740722656,
    height: 14.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.923095703125,
    top: 0.923095703125
  },
  ImageBackground_I0_840_0_5590: {
    width: 14.15380859375,
    height: 14.15386962890625,
    top: 0.576904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.576904296875
  },
  ImageBackground_I0_840_0_5591: {
    width: 10.547691345214844,
    height: 10.547691345214844,
    top: 1.8031005859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.802978515625
  },
  View_I0_840_0_5593: {
    flexGrow: 1,
    width: 14.153846740722656,
    height: 14.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.923095703125,
    top: 0.923095703125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_840_0_5593_0_5681: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_841: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -166,
    top: 521
  },
  View_0_842: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_843: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_844: {
    width: 70,
    minWidth: 70,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 265,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_844_0_5825: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_844_0_5826: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_844_0_5826_0_5695: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_844_0_5827: {
    flexGrow: 1,
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.942626953125,
    top: 6
  },
  Text_I0_844_0_5827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_845: {
    width: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 43.5
  },
  Text_0_845: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_846: {
    width: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 22.5999755859375
  },
  Text_0_846: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_847: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_848: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 442
  },
  View_0_849: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_850: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_851: {
    width: 70,
    minWidth: 70,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 265,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_851_0_5825: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_851_0_5826: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_851_0_5826_0_5695: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_851_0_5827: {
    flexGrow: 1,
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.942626953125,
    top: 6
  },
  Text_I0_851_0_5827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_852: {
    width: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 43.5
  },
  Text_0_852: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_853: {
    width: 122,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 22.5999755859375
  },
  Text_0_853: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_854: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_855: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 363
  },
  View_0_856: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_857: {
    flexGrow: 1,
    width: 295,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_858: {
    width: 87,
    minWidth: 87,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_858_0_5817: {
    flexGrow: 1,
    width: 87,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_858_0_5818: {
    flexGrow: 1,
    width: 87,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_858_0_5818_0_5693: {
    flexGrow: 1,
    width: 87,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  View_I0_858_0_5819: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 6
  },
  Text_I0_858_0_5819: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_859: {
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 43.5
  },
  Text_0_859: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_860: {
    width: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 22.5999755859375
  },
  Text_0_860: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_861: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_862: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 284
  },
  View_0_863: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_864: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_865: {
    width: 87,
    minWidth: 87,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_865_0_5817: {
    flexGrow: 1,
    width: 87,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_865_0_5818: {
    flexGrow: 1,
    width: 87,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_865_0_5818_0_5693: {
    flexGrow: 1,
    width: 87,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  View_I0_865_0_5819: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 6
  },
  Text_I0_865_0_5819: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_866: {
    width: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 43.5
  },
  Text_0_866: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_867: {
    width: 116,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 22.5999755859375
  },
  Text_0_867: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_868: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_869: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 205
  },
  View_0_870: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_871: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_872: {
    width: 70,
    minWidth: 70,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 265,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_872_0_5825: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_872_0_5826: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_872_0_5826_0_5695: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_872_0_5827: {
    flexGrow: 1,
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.942626953125,
    top: 6
  },
  Text_I0_872_0_5827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_873: {
    width: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 43.5
  },
  Text_0_873: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_874: {
    width: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 22.5999755859375
  },
  Text_0_874: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_875: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_876: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 126
  },
  View_0_877: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_878: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_879: {
    width: 70,
    minWidth: 70,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 265,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_879_0_5825: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_879_0_5826: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_879_0_5826_0_5695: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_879_0_5827: {
    flexGrow: 1,
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.942626953125,
    top: 6
  },
  Text_I0_879_0_5827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_880: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 43.5
  },
  Text_0_880: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_881: {
    width: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 22.5999755859375
  },
  Text_0_881: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_882: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_883: {
    width: 20,
    minWidth: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186,
    top: 21
  },
  ImageBackground_0_884: {
    width: 20,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_885: {
    width: 12,
    height: 12,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_885_0_5633: {
    flexGrow: 1,
    width: 8.769229888916016,
    height: 6.461538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.84619140625,
    top: 2.769287109375
  },
  View_I0_885_0_5634: {
    flexGrow: 1,
    width: 8.769229888916016,
    height: 6.461538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.84619140625,
    top: 2.769287109375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_885_0_5634_0_5681: {
    flexGrow: 1,
    width: 12,
    height: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_886: {
    flexGrow: 1,
    width: 375,
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 738
  },
  View_0_887: {
    width: 375,
    height: 74,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_888: {
    flexGrow: 1,
    width: 375,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_888_0_4948: {
    flexGrow: 1,
    width: 375,
    height: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_888_0_4949: {
    flexGrow: 1,
    width: 375,
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_I0_888_0_4950: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 17,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_888_0_4950_0_5395: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375
  },
  View_I0_888_0_4950_0_5397: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_888_0_4950_0_5397_0_5697: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 181, 121, 1)"
  },
  View_I0_888_0_4951: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 223,
    top: 17,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_888_0_4951_0_5229: {
    flexGrow: 1,
    width: 15.387555122375488,
    height: 16.928056716918945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 1.5384521484375
  },
  View_I0_888_0_4951_0_5230: {
    flexGrow: 1,
    width: 15.387555122375488,
    height: 16.928056716918945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_888_0_4951_0_5230_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_I0_888_0_4952: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 17,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_888_0_4952_0_5111: {
    flexGrow: 1,
    width: 15.384613990783691,
    height: 15.384613990783691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 2.30767822265625
  },
  View_I0_888_0_4952_0_5114: {
    flexGrow: 1,
    width: 15.384613990783691,
    height: 15.384613990783691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 2.30767822265625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_888_0_4952_0_5114_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_I0_888_0_4953: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 17,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_888_0_4953_0_5541: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375
  },
  View_I0_888_0_4953_0_5542: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_888_0_4953_0_5542_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_0_889: {
    flexGrow: 1,
    width: 375,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 44
  },
  View_0_890: {
    flexGrow: 1,
    width: 375,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_890_0_5763: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_890_0_5764: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_890_0_5764_0_5073: {
    flexGrow: 1,
    width: 16.153846740722656,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.923095703125,
    top: 1.923095703125
  },
  View_I0_890_0_5764_0_5074: {
    flexGrow: 1,
    width: 16.153846740722656,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.923095703125,
    top: 1.923095703125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_890_0_5764_0_5074_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_I0_890_0_5766: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.5999755859375
  },
  Text_I0_890_0_5766: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_890_0_5768: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_890_0_5768_0_5265: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.84619140625
  },
  View_I0_890_0_5768_0_5266: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.84619140625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_890_0_5768_0_5266_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_0_891: {
    flexGrow: 1,
    width: 195,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 29
  },
  View_0_892: {
    flexGrow: 1,
    width: 194,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 25,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_893: {
    width: 15,
    height: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 24,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_0_894: {
    width: 74,
    minWidth: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_894: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_895: {
    width: 39,
    minWidth: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 0
  },
  Text_0_895: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_896: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_896_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_896_0_5884: {
    width: 22,
    height: 11.333333015441895,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_896_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_896_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_896_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.3306884765625
  },
  ImageBackground_I0_896_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875,
    top: 17.6666259765625
  },
  View_I0_896_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_896_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_897: {
    width: 134,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 778,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_897_0_5913: {
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

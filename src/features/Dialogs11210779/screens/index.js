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
      <View style={styles.View_0_653} />
      <View style={styles.View_0_654}>
        <Text style={styles.Text_0_654}>120</Text>
      </View>
      <View style={styles.View_0_655}>
        <View style={styles.View_0_656} />
        <View style={styles.View_0_657} />
        <View style={styles.View_0_658}>
          <Text style={styles.Text_0_658}>Robin Schulz – Intro</Text>
        </View>
        <View style={styles.View_0_659}>
          <View style={styles.View_I0_659_0_5164}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b52/4985/7316cdd17d7fa81b0e9777ad89739298"
              }}
              style={styles.ImageBackground_I0_659_0_5162}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/536a/eb97/c58cc1e5afe2c164e862123cce772242"
              }}
              style={styles.ImageBackground_I0_659_0_5163}
            />
          </View>
          <View style={styles.View_I0_659_0_5165}>
            <View style={styles.View_I0_659_0_5165_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_660}>
          <Text style={styles.Text_0_660}>Christian Bale</Text>
        </View>
        <View style={styles.View_0_661}>
          <Text style={styles.Text_0_661}>15 Jul</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1800/b799/b0aef68149a68e48f6ae8f707a25c006"
          }}
          style={styles.ImageBackground_0_662}
        />
      </View>
      <View style={styles.View_0_663}>
        <View style={styles.View_0_664} />
        <View style={styles.View_0_665} />
        <View style={styles.View_0_666}>
          <Text style={styles.Text_0_666}>Everything is in order and...</Text>
        </View>
        <View style={styles.View_0_667}>
          <Text style={styles.Text_0_667}>Jerome Griffith</Text>
        </View>
        <View style={styles.View_0_668}>
          <Text style={styles.Text_0_668}>19 Jul</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecd8/060b/320148ad687746f3f40eeb12a6e11de4"
          }}
          style={styles.ImageBackground_0_669}
        />
      </View>
      <View style={styles.View_0_670}>
        <View style={styles.View_0_671} />
        <View style={styles.View_0_672} />
        <View style={styles.View_0_673}>
          <Text style={styles.Text_0_673}>4 videos</Text>
        </View>
        <View style={styles.View_0_674}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/942a/1ab1/e4b53e408a32253c087b32b14be263f0"
            }}
            style={styles.ImageBackground_I0_674_0_5458}
          />
          <View style={styles.View_I0_674_0_5466}>
            <View style={styles.View_I0_674_0_5466_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_675}>
          <Text style={styles.Text_0_675}>Jerome Griffith</Text>
        </View>
        <View style={styles.View_0_676}>
          <Text style={styles.Text_0_676}>19 Jul</Text>
        </View>
        <View style={styles.View_0_677}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25db/2d50/67869b576d389e02f4b5c9e17cf6d2fe"
            }}
            style={styles.ImageBackground_0_678}
          />
          <View style={styles.View_0_679}>
            <Text style={styles.Text_0_679}>JG</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_680}>
        <View style={styles.View_0_681} />
        <View style={styles.View_0_682} />
        <View style={styles.View_0_683}>
          <Text style={styles.Text_0_683}>I just love the Telegram rede…</Text>
        </View>
        <View style={styles.View_0_684}>
          <Text style={styles.Text_0_684}>Designers</Text>
        </View>
        <View style={styles.View_0_685}>
          <Text style={styles.Text_0_685}>20 Jul</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eed5/31f2/1e6454113ace637497b70ecb93eee9c9"
          }}
          style={styles.ImageBackground_0_686}
        />
      </View>
      <View style={styles.View_0_691}>
        <View style={styles.View_0_692} />
        <View style={styles.View_0_693} />
        <View style={styles.View_0_694}>
          <View style={styles.View_I0_694_0_5825} />
          <View style={styles.View_I0_694_0_5826}>
            <View style={styles.View_I0_694_0_5826_0_5695} />
          </View>
          <View style={styles.View_I0_694_0_5827}>
            <Text style={styles.Text_I0_694_0_5827}>1</Text>
          </View>
        </View>
        <View style={styles.View_0_695}>
          <Text style={styles.Text_0_695}>Ok, see u later</Text>
        </View>
        <View style={styles.View_0_696}>
          <Text style={styles.Text_0_696}>Helena Barnes</Text>
        </View>
        <View style={styles.View_0_697}>
          <Text style={styles.Text_0_697}>20 Jul</Text>
        </View>
        <View style={styles.View_0_698}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc8b/498d/04b106828fe1b4e51c3204f2aee4afec"
            }}
            style={styles.ImageBackground_0_699}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c844/c02b/32c6496b26e97f595ed9c845bbbec83e"
            }}
            style={styles.ImageBackground_0_700}
          />
        </View>
      </View>
      <View style={styles.View_0_703}>
        <View style={styles.View_0_704} />
        <View style={styles.View_0_705} />
        <View style={styles.View_0_706}>
          <Text style={styles.Text_0_706}>Thank you, you too!</Text>
        </View>
        <View style={styles.View_0_707}>
          <View style={styles.View_I0_707_0_5825} />
          <View style={styles.View_I0_707_0_5826}>
            <View style={styles.View_I0_707_0_5826_0_5695} />
          </View>
          <View style={styles.View_I0_707_0_5827}>
            <Text style={styles.Text_I0_707_0_5827}>2</Text>
          </View>
        </View>
        <View style={styles.View_0_708}>
          <Text style={styles.Text_0_708}>Andrea Ruggeri</Text>
        </View>
        <View style={styles.View_0_709}>
          <Text style={styles.Text_0_709}>19:10</Text>
        </View>
        <View style={styles.View_0_710}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43d0/e732/2d0486027f148b2a79b06707a5eb594c"
            }}
            style={styles.ImageBackground_0_711}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c844/c02b/32c6496b26e97f595ed9c845bbbec83e"
            }}
            style={styles.ImageBackground_0_712}
          />
        </View>
      </View>
      <View style={styles.View_0_715}>
        <View style={styles.View_0_716} />
        <View style={styles.View_0_717} />
        <View style={styles.View_0_718}>
          <Text style={styles.Text_0_718}>Would you like to buy th…</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0c5/65cd/224c7f9f836613ed5dc2e7238f686d0e"
          }}
          style={styles.ImageBackground_0_719}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c319/54a4/ddba176d51a6aa717111b53639483ca9"
          }}
          style={styles.ImageBackground_0_720}
        />
        <View style={styles.View_0_721}>
          <Text style={styles.Text_0_721}>Landon Johnson</Text>
        </View>
        <View style={styles.View_0_722}>
          <Text style={styles.Text_0_722}>20:19</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5882/3328/24daf65a1f575e2bcbdf7245ae3874e8"
          }}
          style={styles.ImageBackground_0_723}
        />
      </View>
      <View style={styles.View_0_724}>
        <Text style={styles.Text_0_724}>Chats</Text>
      </View>
      <View style={styles.View_0_725}>
        <Text style={styles.Text_0_725}>120</Text>
      </View>
      <View style={styles.View_0_726}>
        <View style={styles.View_0_727} />
        <View style={styles.View_0_728}>
          <View style={styles.View_I0_728_0_4873} />
          <View style={styles.View_I0_728_0_4874} />
          <View style={styles.View_I0_728_0_4875}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59a4/f9a7/518120a1019623b37077e582c4150ec0"
              }}
              style={styles.ImageBackground_I0_728_0_4875_0_5248}
            />
            <View style={styles.View_I0_728_0_4875_0_5249}>
              <View style={styles.View_I0_728_0_4875_0_5249_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_728_0_4876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/516f/070c/081228505fcec460da0ef58ffcbdd384"
              }}
              style={styles.ImageBackground_I0_728_0_4876_0_5431}
            />
            <View style={styles.View_I0_728_0_4876_0_5432} />
            <View style={styles.View_I0_728_0_4876_0_5433}>
              <View style={styles.View_I0_728_0_4876_0_5433_0_5697} />
            </View>
          </View>
          <View style={styles.View_I0_728_0_4877}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3b/e2fe/6ea0c2a3f45b57a1b0f3679d7e6702a4"
              }}
              style={styles.ImageBackground_I0_728_0_4877_0_5395}
            />
            <View style={styles.View_I0_728_0_4877_0_5397}>
              <View style={styles.View_I0_728_0_4877_0_5397_0_4963} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_729}>
        <View style={styles.View_I0_729_0_5763} />
        <View style={styles.View_I0_729_0_5764}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7430/c478/7c26666035c3b729fda1e1a889e1bd12"
            }}
            style={styles.ImageBackground_I0_729_0_5764_0_4967}
          />
          <View style={styles.View_I0_729_0_5764_0_4968}>
            <View style={styles.View_I0_729_0_5764_0_4968_0_4963} />
          </View>
        </View>
        <View style={styles.View_I0_729_0_5766}>
          <Text style={styles.Text_I0_729_0_5766}> </Text>
        </View>
        <View style={styles.View_I0_729_0_5768}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae93/cb31/6761f7b5bc672720fd4048f6097ef73e"
            }}
            style={styles.ImageBackground_I0_729_0_5768_0_5073}
          />
          <View style={styles.View_I0_729_0_5768_0_5074}>
            <View style={styles.View_I0_729_0_5768_0_5074_0_4963} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_730}>
        <View style={styles.View_I0_730_0_5883}>
          <View style={styles.View_I0_730_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_730_0_5885}
          />
          <View style={styles.View_I0_730_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_730_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_730_0_5893}
        />
        <View style={styles.View_I0_730_0_5896}>
          <Text style={styles.Text_I0_730_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_731}>
        <View style={styles.View_I0_731_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_653: {
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
  View_0_654: {
    width: 301,
    minWidth: 301,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: -25
  },
  Text_0_654: {
    color: "rgba(241, 248, 252, 1)",
    fontSize: 202,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_655: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 665
  },
  View_0_656: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_657: {
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
  View_0_658: {
    width: 142,
    minWidth: 142,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 39.5999755859375
  },
  Text_0_658: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_659: {
    width: 16,
    minWidth: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_659_0_5164: {
    flexGrow: 1,
    width: 12.923076629638672,
    height: 12.92330551147461,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.230712890625,
    top: 1.84613037109375
  },
  ImageBackground_I0_659_0_5162: {
    width: 12.923095703125,
    height: 5.5384521484375,
    top: 1.15386962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375
  },
  ImageBackground_I0_659_0_5163: {
    width: 9.230768203735352,
    height: 10.461767196655273,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.6922607421875
  },
  View_I0_659_0_5165: {
    flexGrow: 1,
    width: 12.923076629638672,
    height: 12.92330551147461,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.230712890625,
    top: 1.84613037109375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_659_0_5165_0_5689: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_660: {
    width: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 19
  },
  Text_0_660: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_661: {
    width: 38,
    minWidth: 38,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 20.5
  },
  Text_0_661: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_0_662: {
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
  View_0_663: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 586
  },
  View_0_664: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_665: {
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
  View_0_666: {
    width: 193,
    minWidth: 193,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 39.5999755859375
  },
  Text_0_666: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_667: {
    width: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 19
  },
  Text_0_667: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_668: {
    width: 38,
    minWidth: 38,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 20.5
  },
  Text_0_668: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_0_669: {
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
  View_0_670: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 509
  },
  View_0_671: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_672: {
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
  View_0_673: {
    width: 59,
    minWidth: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 39.5999755859375
  },
  Text_0_673: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_674: {
    width: 16,
    minWidth: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 40,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_674_0_5458: {
    flexGrow: 1,
    width: 13.538461685180664,
    height: 13.538461685180664,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.230712890625,
    top: 1.23077392578125
  },
  View_I0_674_0_5466: {
    flexGrow: 1,
    width: 13.538461685180664,
    height: 13.538461685180664,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.230712890625,
    top: 1.23077392578125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_674_0_5466_0_5689: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_675: {
    width: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 19
  },
  Text_0_675: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_676: {
    width: 38,
    minWidth: 38,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 20.5
  },
  Text_0_676: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_677: {
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
  ImageBackground_0_678: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_679: {
    width: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 14
  },
  Text_0_679: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_680: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 430
  },
  View_0_681: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_682: {
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
  View_0_683: {
    width: 212,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 39.5999755859375
  },
  Text_0_683: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_684: {
    width: 59,
    minWidth: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 19
  },
  Text_0_684: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_685: {
    width: 41,
    minWidth: 41,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294,
    top: 20.5
  },
  Text_0_685: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_0_686: {
    width: 48,
    height: 48,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40
  },
  View_0_691: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 351
  },
  View_0_692: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_693: {
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
  View_0_694: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314,
    top: 37,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_694_0_5825: {
    flexGrow: 1,
    width: 21,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_694_0_5826: {
    flexGrow: 1,
    width: 21,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_694_0_5826_0_5695: {
    flexGrow: 1,
    width: 21,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_694_0_5827: {
    flexGrow: 1,
    width: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.4827880859375,
    top: 3
  },
  Text_I0_694_0_5827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_695: {
    width: 101,
    minWidth: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 39.5999755859375
  },
  Text_0_695: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_696: {
    width: 84,
    minWidth: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 19
  },
  Text_0_696: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_697: {
    width: 41,
    minWidth: 41,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294,
    top: 20.5
  },
  Text_0_697: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_698: {
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
  ImageBackground_0_699: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_700: {
    width: 13,
    height: 13,
    top: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34
  },
  View_0_703: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 272
  },
  View_0_704: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_705: {
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
  View_0_706: {
    width: 138,
    minWidth: 138,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 39.5999755859375
  },
  Text_0_706: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_707: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314,
    top: 37,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_707_0_5825: {
    flexGrow: 1,
    width: 21,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_707_0_5826: {
    flexGrow: 1,
    width: 21,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_707_0_5826_0_5695: {
    flexGrow: 1,
    width: 21,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_707_0_5827: {
    flexGrow: 1,
    width: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.4827880859375,
    top: 3
  },
  Text_I0_707_0_5827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_708: {
    width: 92,
    minWidth: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 19
  },
  Text_0_708: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_709: {
    width: 28,
    minWidth: 28,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307,
    top: 20.5
  },
  Text_0_709: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_710: {
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
  ImageBackground_0_711: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_712: {
    width: 13,
    height: 13,
    top: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34
  },
  View_0_715: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 193
  },
  View_0_716: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_717: {
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
  View_0_718: {
    width: 183,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 39.5999755859375
  },
  Text_0_718: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_719: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 37
  },
  ImageBackground_0_720: {
    width: 9,
    minWidth: 9,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326,
    top: 44
  },
  View_0_721: {
    width: 96,
    minWidth: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 19
  },
  Text_0_721: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_722: {
    width: 30,
    minWidth: 30,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305,
    top: 20.5
  },
  Text_0_722: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_0_723: {
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
  View_0_724: {
    width: 75,
    minWidth: 75,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 136
  },
  Text_0_724: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 31,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_725: {
    width: 29,
    minWidth: 29,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 147
  },
  Text_0_725: {
    color: "rgba(205, 205, 215, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_726: {
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
  View_0_727: {
    width: 375,
    height: 74,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_728: {
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
  View_I0_728_0_4873: {
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
  View_I0_728_0_4874: {
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
  View_I0_728_0_4875: {
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
  ImageBackground_I0_728_0_4875_0_5248: {
    flexGrow: 1,
    width: 18.461538314819336,
    height: 18.461538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 0.76922607421875
  },
  View_I0_728_0_4875_0_5249: {
    flexGrow: 1,
    width: 18.461538314819336,
    height: 18.461538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 0.76922607421875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_728_0_4875_0_5249_0_4963: {
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
  View_I0_728_0_4876: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 178,
    top: 17,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_728_0_4876_0_5431: {
    flexGrow: 1,
    width: 19.23076820373535,
    height: 18.04334259033203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.76922607421875
  },
  View_I0_728_0_4876_0_5432: {
    flexGrow: 1,
    width: 19.23076820373535,
    height: 18.04334259033203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.76922607421875
  },
  View_I0_728_0_4876_0_5433: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_728_0_4876_0_5433_0_5697: {
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
  View_I0_728_0_4877: {
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
  ImageBackground_I0_728_0_4877_0_5395: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.5384521484375,
    top: 1.5384521484375
  },
  View_I0_728_0_4877_0_5397: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.5384521484375,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_728_0_4877_0_5397_0_4963: {
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
  View_0_729: {
    flexGrow: 1,
    width: 375,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 44,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_729_0_5763: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_729_0_5764: {
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
  ImageBackground_I0_729_0_5764_0_4967: {
    flexGrow: 1,
    width: 13.076923370361328,
    height: 13.076923370361328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.4615478515625,
    top: 3.4615478515625
  },
  View_I0_729_0_5764_0_4968: {
    flexGrow: 1,
    width: 13.076923370361328,
    height: 13.076923370361328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.4615478515625,
    top: 3.4615478515625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_729_0_5764_0_4968_0_4963: {
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
  View_I0_729_0_5766: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.5999755859375
  },
  Text_I0_729_0_5766: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_729_0_5768: {
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
  ImageBackground_I0_729_0_5768_0_5073: {
    flexGrow: 1,
    width: 16.153846740722656,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.923095703125,
    top: 1.923095703125
  },
  View_I0_729_0_5768_0_5074: {
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
  View_I0_729_0_5768_0_5074_0_4963: {
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
  View_0_730: {
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
  View_I0_730_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_730_0_5884: {
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
  ImageBackground_I0_730_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_730_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_730_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.6937255859375,
    top: 17.3306884765625
  },
  ImageBackground_I0_730_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 17.6666259765625
  },
  View_I0_730_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_730_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_731: {
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
  View_I0_731_0_5913: {
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


import { View,StyleSheet,ImageBackground, FlatList,Text } from "react-native";
//import {FontAwesome6} from '@expo/vector-icons/FontAwesome6';
import { AntDesign } from "@expo/vector-icons";
import houseList from "@/assets/datas/datas-maison.json";   // une route qui va jusqu'a assets/datas/datas-appartement pour voir les fichiers
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
//import { FlatList } from "react-native-gesture-handler";
/*import { Link } from "expo-router";*/

const Page = () => {

    //console.log(houseList);
    return (
        //personalisation de la page et des items
        <View style={styles.appContainer}>
          <View style={styles.greetingContainer} >
            <Text style={styles.greetingText}> Découvrir </Text>

            <AntDesign name="search1" size={30} color="black"/>         
            </View>
            <FlatList
            data={houseList}  // la src des donnes
            contentContainerStyle={{ gap:15, marginLeft:15, paddingRight:30 }}  // espace entre les elements et de deux cotes
            horizontal   // mess elements etre en hori
            keyExtractor={(item)=> 
                item.cover_image_url.toLowerCase().toString() +
                Math.floor(Math.random() * 1000)
            }                              // la clé pour eviter le beug dans ma liste 
           renderItem={({item}) =>(        // rendrer le donner visible
            <View style={styles.imageBlock}>
                <ImageBackground
                source={{
                    uri: item.cover_image_url,

                }}

                resizeMode="cover"
                style={styles.imageBackground}
                >
                <View style={{flexDirection: "row"}}>
                    <View style={styles.tag}>
                        <Text style={styles.tagNoteText}> Enregistrement  </Text>
                    </View>
                </View>
                   
                </ImageBackground> 
                       
                <View>                                       
                    <View style={[styles.rowBetWeen, styles.mt1]}>                                                      
                        <Text style={{fontSize:25}}>{item.location_city}</Text>

                        <View style={styles.tagContainer}>
                            <Text style={styles.tagText}>5.0 </Text>

                            <MaterialCommunityIcons name="account-star" size={17} color="white" />
                        </View>
                        
                    </View>
                    <View style={[styles.rowBetWeen,styles.mt1]}>                                                      
                        <Text style={{fontSize:25, color: "grey"}}>€ {item.month_price}/Mois </Text>

                        <View style={styles.tagContainer}>
                            <EvilIcons name="user" size={20} color="white" />
                                <Text style={styles.tagText}>5 visites </Text>
                            
                            
                        </View>
                        
                    </View>


                   </View>

                
            </View>
           )}
        />              
            </View>     
 );
};   
const styles= StyleSheet.create({
    appContainer: {
        flex:1,
    },
    greetingContainer: {
        backgroundColor:"blue",  //la couleur de navigation
        flexDirection:"row",  // sur la meme ligne
        justifyContent:"space-between",  //mettre les images ds les extremites
        alignItems: "center",   //alignement des items voir le centrer
        marginTop:50,   // la taille
        marginHorizontal:10,  
    },
    greetingText: {
        fontSize:35,
         fontWeight: "semibold",
         marginLeft:1,
    }, 
    imageBlock:{
        width:320,
    },
    imageBackground:{
        height: 200,
        borderRadius: 30,
        overflow: "hidden",
        padding: 15,  // pour appliquer le arrondit de borderRadius
    },
    tag: {
        padding:5,
        backgroundColor: "#9e5ac8",
        opacity: 0.9,
        borderRadius: 30,
    },
    tagText:{
        padding:4,
        borderRadius:30,
    },
    rowBetWeen:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",

    },
    tagContainer:{
        backgroundColor:"#9c6",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderRadius:5,
        padding: 5,
    },
    tagNoteText:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
    },
    mt1:{
        marginTop:10,
    },

}
);


export default Page;





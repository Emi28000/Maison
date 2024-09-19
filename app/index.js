
import { Redirect,Text,View } from "expo-router";
export default Page;

const Page = () => {
    return (
    <> 
    <Redirect href={"/accueil"}/>  
    <Text>Bienvenue</Text>
    </>
    );
};


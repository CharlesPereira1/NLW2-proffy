import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutLineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://github.com/charlespereira1.png" }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Charles Pereira</Text>
          <Text style={styles.subject}>Física</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiastas das melhores tecnologias de física avançada.
        {"\n"}
        {"\n"}
        Apaixonado por imaginar que um dia irá conhecer a lua e que existe
        buraco negro.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hroa {"   "}
          <Text style={styles.priceValue}>R$ 120,00</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutLineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;

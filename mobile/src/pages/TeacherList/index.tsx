import React from "react";
import { View, ImageBackground, Text } from "react-native";

import TeacherItem from "../../components/TeacherItem";

import PageHeader from "../../components/PageHeader";

import styles from "./styles";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />

      <TeacherItem />
    </View>
  );
}

export default TeacherList;

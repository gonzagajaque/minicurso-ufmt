import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Modulo1: undefined;
  Modulo2: undefined;
  Modulo3: undefined;
  Modulo4: undefined;
  Aulas: undefined;
};

export type Props = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;


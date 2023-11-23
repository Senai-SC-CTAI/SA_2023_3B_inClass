import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (

    <Drawer>
      <Drawer.Screen
        name="reservationSolicitation"
        options={{
          drawerLabel: "Reservas de sala",
          title: "Reservas de sala",
        }}
      />
      <Drawer.Screen
        name="calendar"
        options={{
          drawerLabel: "Calendário",
          title: "Calendário",
        }}
      />
      <Drawer.Screen
        name="personalData"
        options={{
          drawerLabel: "Dados pessoais",
          title: "Dados pessoais",
        }}
      />
      <Drawer.Screen
        name="myReservations"
        options={{
          drawerLabel: "Suas reservas",
          title: "Suas reservas",
        }}
      />
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Menu",
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="signin"
        options={{
          drawerLabel: "Logout",
          title: "Login",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          drawerItemStyle: { height: 0 },
          title: "Tela inicial",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="signup"
        options={{
          drawerItemStyle: { height: 0 },
          title: "Cadastrar",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="startStudent"
        options={{
          drawerItemStyle: { height: 0 },
          title: "Home (Aluno)",
        }}
      />
      <Drawer.Screen
        name="resetPassword"
        options={{
          drawerItemStyle: { height: 0 },
          title: "Redefinir senha",
        }}
      />
      <Drawer.Screen
        name="changeClass"
        options={{
          drawerItemStyle: { height: 0 },
          title: "Trocar de sala",
        }}
      />

    </Drawer>

  );
}
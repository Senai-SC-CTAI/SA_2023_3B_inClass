// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import * as Animatable from 'react-native-animatable';

// const roomOptions = [
//   'E11', 'E12', 'E13', 'F11', 'F12', 'F13', 'F21', 'F22', 'F23', 'F24', 'F25', 'G12', 'G22', 'G23', 'D21', 'D22'
// ];

// const timeOptions = [
//   '7h40', '9h40', '10h35'
// ];

// const App = () => {
//   const [selectedTab, setSelectedTab] = useState(null);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');
//   const [notes, setNotes] = useState('');

//   const handleTabSelect = (tab) => {
//     if (selectedTab === tab) {
//       setSelectedTab(null);
//     } else {
//       setSelectedTab(tab);
//     }
//   };

//   const handleRoomSelect = (room) => {
//     setSelectedRoom(room);
//   };

//   const handleTimeSelect = (time) => {
//     setSelectedTime(time);
//   };

//   const handleSearchClick = () => {
//     const selectedDate = `${day}/${month}/${year}`;
//     const reservationDetails = `Room: ${selectedRoom}, Time: ${selectedTime}, Date: ${selectedDate}, Notes: ${notes}`;
//     console.log(reservationDetails);
//   };

//   const formattedDate = `${day}/${month}/${year}`;

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
//         <View style={styles.tabs}>
//           <TouchableOpacity
//             style={[styles.tab, selectedTab === 1 && styles.selectedTab]}
//             onPress={() => handleTabSelect(1)}
//           >
//             <Text style={styles.tabText}>Escolha a sala</Text>
//             {selectedRoom && <Text style={styles.selectedOptionText}>{selectedRoom}</Text>}
//           </TouchableOpacity>
//           <Animatable.View
//             animation={selectedTab === 1 ? 'fadeInDown' : 'fadeOutUp'}
//             style={styles.optionsContainer}
//           >
//             {selectedTab === 1 && (
//               <View style={styles.options}>
//                 {roomOptions.map(room => (
//                   <TouchableOpacity
//                     key={room}
//                     onPress={() => handleRoomSelect(room)}
//                     style={[styles.option, selectedRoom === room && styles.selectedOption]}
//                   >
//                     <Text style={styles.optionText}>{room}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             )}
//           </Animatable.View>
//           <TouchableOpacity
//             style={[styles.tab, selectedTab === 2 && styles.selectedTab]}
//             onPress={() => handleTabSelect(2)}
//           >
//             <Text style={styles.tabText}>Escolha o horário</Text>
//             {selectedTime && <Text style={styles.selectedOptionText}>{selectedTime}</Text>}
//           </TouchableOpacity>
//           <Animatable.View
//             animation={selectedTab === 2 ? 'fadeInDown' : 'fadeOutUp'}
//             style={styles.optionsContainer}
//           >
//             {selectedTab === 2 && (
//               <View style={styles.options}>
//                 {timeOptions.map(time => (
//                   <TouchableOpacity
//                     key={time}
//                     onPress={() => handleTimeSelect(time)}
//                     style={[styles.option, selectedTime === time && styles.selectedOption]}
//                   >
//                     <Text style={styles.optionText}>{time}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             )}
//           </Animatable.View>
//           <TouchableOpacity
//             style={[styles.tab, selectedTab === 3 && styles.selectedTab]}
//             onPress={() => handleTabSelect(3)}
//           >
//             <Text style={styles.tabText}>Escolha a data</Text>
//             {formattedDate && <Text style={styles.selectedOptionText}>{formattedDate}</Text>}
//           </TouchableOpacity>
//           <Animatable.View
//             animation={selectedTab === 3 ? 'fadeInDown' : 'fadeOutUp'}
//             style={styles.optionsContainer}
//           >
//             {selectedTab === 3 && (
//               <View style={styles.options}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Dia"
//                   value={day}
//                   onChangeText={setDay}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Mês"
//                   value={month}
//                   onChangeText={setMonth}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Ano"
//                   value={year}
//                   onChangeText={setYear}
//                 />
//               </View>
//             )}
//           </Animatable.View>
//         </View>
//         <View style={styles.notes}>
//           <Text style={styles.notesText}>Notas (limite de 250 linhas):</Text>
//           <TextInput
//             style={styles.textarea}
//             value={notes}
//             onChangeText={setNotes}
//             multiline={true}
//             maxLength={250}
//           />
//         </View>
//         <TouchableOpacity
//           style={styles.searchButton}
//           onPress={handleSearchClick}
//         >
//           <Text style={styles.buttonText}>Buscar Reserva</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//   },
//   content: {
//     width: '90%',
//     marginVertical: 20,
//   },
//   tabs: {
//     marginBottom: 20,
//   },
//   tab: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   selectedTab: {
//     backgroundColor: '#00AEA4',
//   },
//   tabText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   selectedOptionText: {
//     fontSize: 16,
//     color: '#00AEA4',
//   },
//   optionsContainer: {
//     overflow: 'hidden',
//   },
//   options: {
//     marginTop: 5,
//     marginBottom: 20,
//   },
//   option: {
//     paddingVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     marginBottom: 5,
//   },
//   selectedOption: {
//     backgroundColor: '#00AEA4',
//   },
//   optionText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     fontSize: 16,
//   },
//   notes: {
//     marginBottom: 20,
//   },
//   notesText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   textarea: {
//     width: '100%',
//     height: 150,
//     padding: 10,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//     searchButton: {
//     padding: 10,
//     backgroundColor: '#00AEA4',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default App;
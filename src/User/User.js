import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import { Input, Layout, Text,  IndexPath, Select, SelectItem, Card, Avatar, Button} from '@ui-kitten/components';

const lstGender = ["Laki-laki", "Perempuan"]
const lstStatus = ["Lajang", "Menikah"]

const User = () => {
    const [nama, setNama] = useState("")
    const [gender, setGender] = useState(0)
    const [umur, setUmur] = useState("")
    const [status, setStatus] = useState(0)
    const [lokasi, setLokasi] = useState("")


    const renderOption = (title)=>{
        <SelectItem title={title}/>
    }
    
    return (
        <Layout style={styles.container}>
            <Layout style={styles.layout}>
                <Text style={styles.text} category='h6'>Nama</Text>
                <Input size='small' value={nama}
                onChangeText={txtNama => setNama(txtNama)}
                />
            </Layout>

            <Layout style={styles.layout}>
            <Text style={styles.text} category='h6'>Gender</Text>
            <Select
                selectedIndex={gender}
                placeholder='Jenis Kelamin Anda'
                value={lstGender[gender.row]}
                onSelect={index => setGender(index)}>
                <SelectItem title='Laki-laki'/>
                <SelectItem title='Perempuan'/>
            </Select>
            </Layout>

            <Layout style={styles.layout}>
                <Text style={styles.text} category='h6'>Umur</Text>
                <Input size='small' value={umur}
                onChangeText={txtUmur => setUmur(txtUmur)}
                />
            </Layout>

            <Layout style={styles.layout}>
            <Text style={styles.text} category='h6'>Status</Text>
            <Select
                selectedIndex={status}
                placeholder='Status Anda'
                value={lstStatus[status.row]}
                onSelect={index => setStatus(index)}>
                <SelectItem title='Lajang'/>
                <SelectItem title='Menikah'/>
            </Select>
            </Layout>

            <Layout style={styles.layout}>
                <Card style={styles.card}>
                    <Avatar style={styles.avatar} size='giant' source={require('../User/default-avatar.jpg')}/>
                    <Button style={styles.button} size='small'>
                        Ambil Photo
                    </Button>
                </Card>
            </Layout>
            
            <Layout style={styles.layout}>
                <Text style={styles.text} category='h6'>Location(Latitude/Longitude)</Text>
                    <Input size='small' value={lokasi}
                    onChangeText={location => setLokasi(location)}
                />
                <Button style={styles.button} size='small'>Ambil Lokasi</Button>
            </Layout>

            <Layout style={styles.layout}>
                <Button style={styles.button} size='small'>
                    Kirim
                </Button>
            </Layout>

        </Layout>
    )
}

export default User

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
      },
    layout: {
        margin: 2,
        alignItems: 'stretch'
    },
    text: {
        margin: 1,
      },
    avatar: {
        margin: 22,
        justifyContent: 'center',
      },
      button: {
        margin: 2,
      },
    card:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'flex-end',
      },
   

})

import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import { Input, Layout, Text,  IndexPath, Select, SelectItem, Card, Avatar, Button} from '@ui-kitten/components';
const lstIzin = ["Izin-sakit", "Izin anak-sakit"]

const Izin = () => {
    const [izin, setIzin] = useState(0)
    const [tanggal, setTanggal] = useState("")
    const [tanggal2, setTanggal2] = useState("")
    const [Perihal, setPerihal] = useState("")
    return (
        <layout style={styles.container}>

            <Layout style={styles.layout}>
            <Text style={styles.text} category='h6'>Izin</Text>
            <Select
                selectedIndex={izin}
                placeholder='Jenis Kelamin Anda'
                value={lstIzin[izin.row]}
                onSelect={index => setIzin(index)}>
                <SelectItem title='Izin Sakit'/>
                <SelectItem title='Izin anak sakit'/>
            </Select>
            </Layout>

            <Layout style={styles.layout}>
                <Text style={styles.text} category='h6'>Dari Tanggal</Text>
                <Input size='small' value={tanggal}
                onChangeText={txtTanggal => setTanggal(txtTanggal)}
                />
            </Layout>

            <Layout style={styles.layout}>
                <Text style={styles.text} category='h6'>Sampai Tanggal</Text>
                <Input size='small' value={tanggal2}
                onChangeText={txtTanggal2 => setTanggal2(txtTanggal2)}
                />
            </Layout>

            <Layout style={styles.layout}>
                <Text style={styles.text} category='h6'>Perihal</Text>
                <Input size='small' value={perihal}
                onChangeText={txtPerihal => setPerihal(txtPerihal)}
                />
            </Layout>

            <Layout style={styles.layout}>
                <Text style={styles.text} category='h6'>Keterangan</Text>
                <Input size='small' value={nama}
                onChangeText={txtNama => setNama(txtNama)}
                />
            </Layout>

            <Layout style={styles.layout}>
                <Button style={styles.button} size='small'>
                    Kirim
                </Button>
            </Layout>

            

        </layout>
    )
}

export default Izin

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

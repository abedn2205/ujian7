import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Layout, Text,  IndexPath, Select, SelectItem, Card, Avatar, Button} from '@ui-kitten/components';

const Checkin = () => {
    return (
        <layout style={styles.container}>
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

        </layout>
    )
}

export default Checkin

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

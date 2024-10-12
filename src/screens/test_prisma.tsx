import { Pressable, View } from 'react-native';
import { PrismaClient } from '@prisma/client';

export default function TestPrisma() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#691212' }}>
            <Pressable
                style={{
                    width: '70%',
                    height: 70,
                    backgroundColor: '#ffffff'
                }}

                onPress={async () => {
                    const prismaClient = new PrismaClient();

                    prismaClient.user.findMany();
                }}
            />
        </View>
    );
}
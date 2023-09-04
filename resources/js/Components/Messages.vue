<template>
    <div class="px-9">
        <form @submit.prevents="saveData()">
            <div>
                <label for="name" class="font-raleway">Nama</label>
                <input type="text" name="name" id="name" class="w-full border border-black mt-3 px-4 py-2 rounded-2xl" v-model="pesan.nama">
                
            </div>
            <div class="mt-6">
                <label for="name" class="font-raleway">Pesan</label>
                <textarea type="text" name="name" id="name" class="w-full border border-black mt-3 px-4 py-2 rounded-2xl" rows="4" v-model="pesan.pesan"></textarea>
            </div>
            <button type="submit" class="mt-5 px-5 py-2 bg-black text-white rounded-xl">Kirim Pesan</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data(){
        return {
            'pesan' : {
                'nama':'',
                'pesan':''
            }
        }
    },

    methods: {
        saveData(){
            axios.post('/pesan/create', this.pesan).then(
                response => {
                    console.log(response);
                }
            ).catch(error => {
                console.log('error');
            })
        }
    }
}

</script>
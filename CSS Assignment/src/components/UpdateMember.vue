<template>
  <div class='container'>
    <form @submit.prevent='updateInfo'>
      <br/>

      <div class='title'>
        <h1>Personal Info</h1>
      </div>

      <!--ID-->
      <div class="form-group row">
        <label for="idCard" class="col-md-2 col-form-label">Identification</label>
        <div class="col-sm-6">
          <input @blur="$v.idCard.$touch()" id="idCard" class="form-control" type="text" v-model.trim="idCard"/>
          <div v-if="$v.idCard.$error">
            <div v-for="(error, index) of $v.idCard.$errors" :key="index">
              <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <!--Name-->
      <div class="form-group row">
        <label for="name" class="col-md-2 col-form-label">Name</label>
        <div class="col-sm-6">
          <input @blur="$v.name.$touch()" id="name" class="form-control" type="text" v-model.trim="name"/>
          <div v-if="$v.name.$error">
            <div v-for="(error, index) of $v.name.$errors" :key="index">
              <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <!--Surname-->
      <div class="form-group row">
        <label for="surname" class="col-md-2 col-form-label">Surname</label>
        <div class="col-sm-6">
          <input @blur="$v.surname.$touch()" id="surname" class="form-control" type="text" v-model.trim="surname"/>
          <div v-if="$v.surname.$error">
            <div v-for="(error, index) of $v.surname.$errors" :key="index">
              <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <!--DOB-->
      <div class='form-group row'>
        <label for="birthday" class=" col-md-2 col-form-label">Birthday</label>
        <div class="col-sm-6">
          <input @blur="$v.dob.$touch()" type="date" id="birthday" name="birthday" v-model.trim="dob">
          <div v-if="$v.dob.$error">
            <div v-for="(error, index) of $v.dob.$errors" :key="index">
              <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <!--Nationality-->
      <div class="form-group row">
        <label for="name" class="col-md-2 col-form-label">Nationality</label>
        <div class="col-sm-6">
          <select @blur="$v.nationality.$touch()" id="nationality" name="nationality" class="form-control" v-model.trim="nationality">

            <option value="">-- select one --</option>
            <option value="afghan">Afghan</option>
            <option value="albanian">Albanian</option>
            <option value="algerian">Algerian</option>
            <option value="american">American</option>
            <option value="andorran">Andorran</option>
            <option value="angolan">Angolan</option>
            <option value="antiguans">Antiguans</option>
            <option value="argentinean">Argentinean</option>
            <option value="armenian">Armenian</option>
            <option value="australian">Australian</option>
            <option value="austrian">Austrian</option>
            <option value="azerbaijani">Azerbaijani</option>
            <option value="bahamian">Bahamian</option>
            <option value="bahraini">Bahraini</option>
            <option value="bangladeshi">Bangladeshi</option>
            <option value="barbadian">Barbadian</option>
            <option value="barbudans">Barbudans</option>
            <option value="batswana">Batswana</option>
            <option value="belarusian">Belarusian</option>
            <option value="belgian">Belgian</option>
            <option value="belizean">Belizean</option>
            <option value="beninese">Beninese</option>
            <option value="bhutanese">Bhutanese</option>
            <option value="bolivian">Bolivian</option>
            <option value="bosnian">Bosnian</option>
            <option value="brazilian">Brazilian</option>
            <option value="british">British</option>
            <option value="bruneian">Bruneian</option>
            <option value="bulgarian">Bulgarian</option>
            <option value="burkinabe">Burkinabe</option>
            <option value="burmese">Burmese</option>
            <option value="burundian">Burundian</option>
            <option value="cambodian">Cambodian</option>
            <option value="cameroonian">Cameroonian</option>
            <option value="canadian">Canadian</option>
            <option value="cape verdean">Cape Verdean</option>
            <option value="central african">Central African</option>
            <option value="chadian">Chadian</option>
            <option value="chilean">Chilean</option>
            <option value="chinese">Chinese</option>
            <option value="colombian">Colombian</option>
            <option value="comoran">Comoran</option>
            <option value="congolese">Congolese</option>
            <option value="costa rican">Costa Rican</option>
            <option value="croatian">Croatian</option>
            <option value="cuban">Cuban</option>
            <option value="cypriot">Cypriot</option>
            <option value="czech">Czech</option>
            <option value="danish">Danish</option>
            <option value="djibouti">Djibouti</option>
            <option value="dominican">Dominican</option>
            <option value="dutch">Dutch</option>
            <option value="east timorese">East Timorese</option>
            <option value="ecuadorean">Ecuadorean</option>
            <option value="egyptian">Egyptian</option>
            <option value="emirian">Emirian</option>
            <option value="equatorial guinean">Equatorial Guinean</option>
            <option value="eritrean">Eritrean</option>
            <option value="estonian">Estonian</option>
            <option value="ethiopian">Ethiopian</option>
            <option value="fijian">Fijian</option>
            <option value="filipino">Filipino</option>
            <option value="finnish">Finnish</option>
            <option value="french">French</option>
            <option value="gabonese">Gabonese</option>
            <option value="gambian">Gambian</option>
            <option value="georgian">Georgian</option>
            <option value="german">German</option>
            <option value="ghanaian">Ghanaian</option>
            <option value="greek">Greek</option>
            <option value="grenadian">Grenadian</option>
            <option value="guatemalan">Guatemalan</option>
            <option value="guinea-bissauan">Guinea-Bissauan</option>
            <option value="guinean">Guinean</option>
            <option value="guyanese">Guyanese</option>
            <option value="haitian">Haitian</option>
            <option value="herzegovinian">Herzegovinian</option>
            <option value="honduran">Honduran</option>
            <option value="hungarian">Hungarian</option>
            <option value="icelander">Icelander</option>
            <option value="indian">Indian</option>
            <option value="indonesian">Indonesian</option>
            <option value="iranian">Iranian</option>
            <option value="iraqi">Iraqi</option>
            <option value="irish">Irish</option>
            <option value="israeli">Israeli</option>
            <option value="italian">Italian</option>
            <option value="ivorian">Ivorian</option>
            <option value="jamaican">Jamaican</option>
            <option value="japanese">Japanese</option>
            <option value="jordanian">Jordanian</option>
            <option value="kazakhstani">Kazakhstani</option>
            <option value="kenyan">Kenyan</option>
            <option value="kittian and nevisian">Kittian and Nevisian</option>
            <option value="kuwaiti">Kuwaiti</option>
            <option value="kyrgyz">Kyrgyz</option>
            <option value="laotian">Laotian</option>
            <option value="latvian">Latvian</option>
            <option value="lebanese">Lebanese</option>
            <option value="liberian">Liberian</option>
            <option value="libyan">Libyan</option>
            <option value="liechtensteiner">Liechtensteiner</option>
            <option value="lithuanian">Lithuanian</option>
            <option value="luxembourger">Luxembourger</option>
            <option value="macedonian">Macedonian</option>
            <option value="malagasy">Malagasy</option>
            <option value="malawian">Malawian</option>
            <option value="malaysian">Malaysian</option>
            <option value="maldivan">Maldivan</option>
            <option value="malian">Malian</option>
            <option value="maltese">Maltese</option>
            <option value="marshallese">Marshallese</option>
            <option value="mauritanian">Mauritanian</option>
            <option value="mauritian">Mauritian</option>
            <option value="mexican">Mexican</option>
            <option value="micronesian">Micronesian</option>
            <option value="moldovan">Moldovan</option>
            <option value="monacan">Monacan</option>
            <option value="mongolian">Mongolian</option>
            <option value="moroccan">Moroccan</option>
            <option value="mosotho">Mosotho</option>
            <option value="motswana">Motswana</option>
            <option value="mozambican">Mozambican</option>
            <option value="namibian">Namibian</option>
            <option value="nauruan">Nauruan</option>
            <option value="nepalese">Nepalese</option>
            <option value="new zealander">New Zealander</option>
            <option value="ni-vanuatu">Ni-Vanuatu</option>
            <option value="nicaraguan">Nicaraguan</option>
            <option value="nigerien">Nigerien</option>
            <option value="north korean">North Korean</option>
            <option value="northern irish">Northern Irish</option>
            <option value="norwegian">Norwegian</option>
            <option value="omani">Omani</option>
            <option value="pakistani">Pakistani</option>
            <option value="palauan">Palauan</option>
            <option value="panamanian">Panamanian</option>
            <option value="papua new guinean">Papua New Guinean</option>
            <option value="paraguayan">Paraguayan</option>
            <option value="peruvian">Peruvian</option>
            <option value="polish">Polish</option>
            <option value="portuguese">Portuguese</option>
            <option value="qatari">Qatari</option>
            <option value="romanian">Romanian</option>
            <option value="russian">Russian</option>
            <option value="rwandan">Rwandan</option>
            <option value="saint lucian">Saint Lucian</option>
            <option value="salvadoran">Salvadoran</option>
            <option value="samoan">Samoan</option>
            <option value="san marinese">San Marinese</option>
            <option value="sao tomean">Sao Tomean</option>
            <option value="saudi">Saudi</option>
            <option value="scottish">Scottish</option>
            <option value="senegalese">Senegalese</option>
            <option value="serbian">Serbian</option>
            <option value="seychellois">Seychellois</option>
            <option value="sierra leonean">Sierra Leonean</option>
            <option value="singaporean">Singaporean</option>
            <option value="slovakian">Slovakian</option>
            <option value="slovenian">Slovenian</option>
            <option value="solomon islander">Solomon Islander</option>
            <option value="somali">Somali</option>
            <option value="south african">South African</option>
            <option value="south korean">South Korean</option>
            <option value="spanish">Spanish</option>
            <option value="sri lankan">Sri Lankan</option>
            <option value="sudanese">Sudanese</option>
            <option value="surinamer">Surinamer</option>
            <option value="swazi">Swazi</option>
            <option value="swedish">Swedish</option>
            <option value="swiss">Swiss</option>
            <option value="syrian">Syrian</option>
            <option value="taiwanese">Taiwanese</option>
            <option value="tajik">Tajik</option>
            <option value="tanzanian">Tanzanian</option>
            <option value="thai">Thai</option>
            <option value="togolese">Togolese</option>
            <option value="tongan">Tongan</option>
            <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
            <option value="tunisian">Tunisian</option>
            <option value="turkish">Turkish</option>
            <option value="tuvaluan">Tuvaluan</option>
            <option value="ugandan">Ugandan</option>
            <option value="ukrainian">Ukrainian</option>
            <option value="uruguayan">Uruguayan</option>
            <option value="uzbekistani">Uzbekistani</option>
            <option value="venezuelan">Venezuelan</option>
            <option value="vietnamese">Vietnamese</option>
            <option value="welsh">Welsh</option>
            <option value="yemenite">Yemenite</option>
            <option value="zambian">Zambian</option>
            <option value="zimbabwean">Zimbabwean</option>

          </select>
          <div v-if="$v.nationality.$error">
            <div v-for="(error, index) of $v.nationality.$errors" :key="index">
              <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <!--Gender-->
      <div class="form-group row">
        <label for="name" class="col-md-2 col-form-label">Gender</label>
        <div class="col-sm-6">
          <select @blur="$v.gender.$touch()" id="gender" name="gender" class="form-control" v-model.trim="gender">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div v-if="$v.gender.$error">
            <div v-for="(error, index) of $v.gender.$errors" :key="index">
              <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <br/>
      <div class='title'>
        <h1>Contact Information</h1>
      </div>

      <!--Email-->
      <div class="form-group row">
        <label for="email" class="col-md-2 col-form-label">Email</label>
        <div class="col-sm-6">
          <input @blur="$v.email.$touch()" id="email" class="form-control" type="email" v-model.trim="email"/>
          <div v-if="$v.email.$error">
            <div v-for="(error, index) of $v.email.$errors" :key="index">
              <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <!--Mobile-->
      <div class="form-group row">
        <label for="mobile" class="col-md-2 col-form-label">Mobile</label>
        <div class="col-sm-6">
          <input @blur="$v.mobile.$touch()" id="mobile" class="form-control" type="text" v-model.number="mobile"/>
          <div v-if="$v.mobile.$error">
            <div v-for="(error, index) of $v.mobile.$errors" :key="index">
              <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <br/>
      <div class='title'>
        <h1>Player Information</h1>
      </div>

      <!--Status-->
      <div class="form-group row">
        <label for="status" class="col-md-2 col-form-label">Player Status</label>
        <div class="col-sm-6">
          <input @blur="$v.status.$touch()" id="status" class="form-control" type="text" v-model.trim="status"/>
          <div v-if="$v.status.$error">
            <div v-for="(error, index) of $v.status.$errors" :key="index">
              <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <!--Club-->
      <div class="form-group row">
        <label for="club" class="col-md-2 col-form-label">Club</label>
        <div class="col-sm-6">
          <input @blur="$v.club.$touch()" id="club" class="form-control" type="text" v-model.trim="club"/>
          <div v-if="$v.club.$error">
            <div v-for="(error, index) of $v.club.$errors" :key="index">
              <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>


      <div class="form-group row">
        <button @click="back" type="button" class="btn btn-secondary">Back</button>
        <button data-toggle="modal" data-target="#myModal"
                type="submit" :disabled="$v.$invalid
                ||!name||!surname||!dob||!gender
                ||!idCard||!mobile||!email||!nationality||!club
                ||!status" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <!--<div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Firebase Example</h4>
        </div>-->
        <div class="modal-body">
          <p>Updated member stored in Firebase</p>
        </div>
        <div class="modal-footer">
          <button type="button" @click="afterModal" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, alpha, numeric, email, alphaNum} from '@vuelidate/validators'
export default {
  //emits: ['set-data'],
  data() {
    return {
      name: '',
      surname: '',
      dob: '',
      gender: '',
      idCard: '',
      mobile: '',
      email: '',
      nationality: '',
      club: '',
      status: '',
      memId: '',
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(4), maxLength: maxLength(15), alpha },
      surname: { required, minLength: minLength(3), maxLength: maxLength(15), alpha },
      dob: { required },
      gender: { required },
      idCard: { required, minLength: minLength(5), maxLength: maxLength(8), alphaNum },
      mobile: { required, minLength: minLength(8), numeric },
      email: { required, email },
      nationality: { required, alpha },
      club: { required, alphaNum },
      status: { required }
    }
  },
  methods: {

    afterModal() {
      this.$router.push('/');
    },

    back() {
      this.$router.back();
    },

    async updateInfo() {
      this.$v.$touch();
      //we will submit only if the form does not contain anything invalid
        //Update current entry
          const response = await fetch("https://css-assignment-2021-default-rtdb.europe-west1.firebasedatabase.app/contact/" + this.$route.params.memberId + ".json", {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.name,
              surname: this.surname,
              dob: this.dob,
              gender: this.gender,
              idCard: this.idCard,
              mobile: this.mobile,
              email: this.email,
              nationality: this.nationality,
              club: this.club,
              status: this.status
            })
          })
          if (!response.ok) {
            console.log("Something went wrong");
          }
     },
    async getData(){
      console.log("Getting data");
      const id = this.$route.params.memberId;
      try {
        const response = await fetch("https://css-assignment-2021-default-rtdb.europe-west1.firebasedatabase.app/contact/" + id + ".json", {
          method: 'GET'
        })
        const responseData = await response.json();
        if (!response.ok) {
          console.log("Something went wrong")
        }

        this.name = responseData.name;
        this.surname = responseData.surname;
        this.dob = responseData.dob;
        this.gender = responseData.gender;
        this.idCard = responseData.idCard;
        this.mobile = responseData.mobile;
        this.email = responseData.email;
        this.nationality = responseData.nationality;
        this.club = responseData.club;
        this.status = responseData.status;

      } catch (error) {
        console.log(error);
      }
    }
    },

    mounted() {
    this.getData();
   }
};
</script>

<style scoped>
form{
  width: 100%;
  padding:0;
  margin: auto;
  justify-content: center;
  align-items: center;
}

.title{
  font-size: 10px;
}

</style>
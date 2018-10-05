<template>
  <div class="container">
    <h1 class="logo">Thông tin thống kê</h1>

    <div class="row">
      <div class="col-4"></div>
      <div class="col-1 btn" v-on:click="prevMonth()">&#9668;</div>
      <div class="col-2">{{month}} / {{year}} - {{currentMonth}}</div>
      <div class="col-1 btn" v-on:click="nextMonth()" v-if="this.month < this.currentMonth">&#9658;</div>
    </div>

<!--     <div v-for="center in centers" class="text-left"> -->
    <h4>{{center.name}}</h4>
    <p v-if="showHint">Tháng {{month}} / {{year}} chưa có dữ liệu, vui lòng nhập</p>

    <div>
      <label>Số học sinh mới</label>
      <div>
        <p v-if="!isEditMode" v-on:click="isEditMode=true">{{center.stats['number_of_new_students']}}</p>
        <input type="text" v-if="isEditMode" v-model="center.stats['number_of_new_students']"/>
      </div>
     

      <label>Số học bổng</label>
      <div>
        <p v-if="!isEditMode"  v-on:click="isEditMode=true">{{center.stats['number_of_new_scholarships']}}</p>
        <input type="text" v-if="isEditMode" v-model="center.stats['number_of_new_scholarships']"/>
      </div>
      

      <label>Số học sinh xuất sắc</label>
      <div>
        <p v-if="!isEditMode"  v-on:click="isEditMode=true">{{center.stats['number_of_excellent_students']}}</p>
        <input type="text" v-if="isEditMode" v-model="center.stats['number_of_excellent_students']"/>
      </div>
      
      <button v-if="isEditMode" v-on:click="submit()">Lưu</button>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import StatService from '../services/stats';

export default {
  name: 'PageStats',
  data () {
    return {
      currentMonth: (new Date()).getMonth()+1, // the month's function will return month from 0-11, hence we need to add 1 to comply with our user interface
      month: 8,
      year: 2018,
      center_id: 1, // TODO: refactor
      center: {},
      isEditMode: false,
      showHint: false
    }
  },
  methods: {
    loadData: async function() {
      var data = (await StatService.getStatistic(this.center_id, this.year, this.month));


      if(data.stats === undefined) {
        this.isEditMode = true;
        this.showHint = true;
        this.center.stats = {};

        // show error message
      }
      else
      {
        this.center = data;
      }
    },

    nextMonth: function() {
      if(this.month < 12) {
        this.month = this.month + 1;  
      }

      if(this.month === 12) {
        this.month = 1;
        this.year = this.year + 1;
      }

      this.loadData();
    },

    prevMonth: function() {
      if(this.month > 1) {
        this.month = this.month - 1;
      }
      else {
        this.month = 12;
        this.year = this.year - 1;
      }

      this.loadData();
    },

    submit: function() {
      StatService.submitStatistics(this.center_id, this.year, this.month, this.center.stats);
      this.isEditMode = false;
      this.showHint = false;
    }
  },

  mounted: function() {
    this.loadData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  margin-top: 150px;
  padding-left: 20px;
  padding-right: 20px;
}

input {
  margin-bottom: 10px;
  color: #C6C6C6;
  font-size: 1em;
}

.g-button {
  margin-top: 30px;
}

</style>

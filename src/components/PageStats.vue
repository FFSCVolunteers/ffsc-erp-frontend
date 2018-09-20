<template>
  <div class="container">
    <h1 class="logo">Thông tin thống kê</h1>

    <div class="row">
      <div class="col-4"></div>
      <div class="col-1">&#9668;</div>
      <div class="col-2">{{month}} / {{year}}</div>
      <div class="col-1">&#9658;</div>
    </div>

    <div v-for="center in centers" class="text-left">
      <h4>{{center.name}}</h4>

      <div>
        Số học sinh mới: {{center.stats['number_of_new_students']}}
      </div>
      <div>
        Số học bổng: {{center.stats['number_of_scholarships']}}
      </div>
      <div>
        Số học sinh xuất sắc: {{center.stats['number_of_excellent_students']}}
      </div>
    </div>
  </div>
</template>

<script>
import StatService from '../services/stats';

export default {
  name: 'PageStats',
  data () {
    return {
      month: 8,
      year: 2018,
      centers: [
        {
          center_id: 1,
          name: 'Bình Triệu',
          stats: {
            number_of_new_students: 10,
            number_of_scholarships: 20,
            number_of_excellent_students: 2
          }
        },

        {
          center_id: 2,
          name: 'Bình An',
          stats: {
            number_of_new_students: 20,
            number_of_scholarships: 30,
            number_of_excellent_students: 4
          }
        }
      ]
    }
  },
  methods: {
    
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

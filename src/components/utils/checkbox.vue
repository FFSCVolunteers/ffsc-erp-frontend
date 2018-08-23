<template>
	<input class="regular-checkbox" 
    value="1"
     :checked="checked"
     @change="change"
    type="checkbox" aria-label="">
</template>

<script>
export default {
  name: 'Checkbox',
  data () {
    return {
      checked: this.value
    }
  },
  props: ['value'],
  methods: {
    change: function() {
        this.checked = !this.checked;
        this.$emit('input', this.checked);
    }
  }
}
</script>

<style scoped>

.regular-checkbox {
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
  padding: 10px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
}

.regular-checkbox:active, .regular-checkbox:checked:active {
  box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
}

.regular-checkbox:checked {
  border: 1px solid #adb8c0;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
  color: #99a1a7;
}

.regular-checkbox:checked:after {
  content: '\2714';
  font-size: 14px;
  position: absolute;
  top: 0px;
  left: 5px;
  color: #5E7FB1;
}
</style>
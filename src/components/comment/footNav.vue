<template>
    <div class="footer">
		<div class="footer-left">
			<ul>
				<li><a href="#">Privacy Policy</a>|</li>
				<li><a href="#">Terms of Use</a>|</li>
				<li><a href="mail.html">Contact Me</a></li>
			</ul>
			<p>Copyright &copy; 7018.My name is ZiJun.Here is my Blog.<a href="index.html">梓君的个人博客</a></p>
		</div>
		<div class="footer-right">
			<contact/>
		</div>
		<div class="clearfix"></div>
	</div>
</template>

<script>
import contact from './contact'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
	},
	components: {
		contact
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../common/css/style.css';
.footer{
	margin-bottom: 30px;
	overflow: hidden;
}
</style>

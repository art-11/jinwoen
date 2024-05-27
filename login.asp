<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" vocab="http://schema.org/" lang="zh-Hant-TW">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>臺中旅行商業同業公會</title>
	<link href="images/favicon.ico" rel="Shortcut icon" type="image/x-icon" />
	<meta name="viewport" content="initial-scale=1,width=device-width" />
	<meta name="keywords" content="" />
	<meta name="description" property="og:description" content="" />
	<meta property="og:url" content="" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
	<meta property="og:site_name" content="" />
	<meta name="copyright" content="" />
	<meta name="format-detection" content="telephone=no" />
	<!--#include file="common-css.asp"-->
</head>

<body>
	<!--#include file="header.asp"-->
	<main class="wrapper">
		<div class="page-banner">
			<div class="slogan flex">
				<h2>會員登入</h2>
			</div>
			<figure>
				<img src="images/enterprise-banner.jpg" alt="">
			</figure>
			<div class="curner"><img src="images/slogan.svg" alt="" srcset=""></div>
			<img src="images/enterprise-icon.svg" class="s-title" alt="">
		</div>
		<div class="content enterprise">
			<div class="all-width2">
				<div id="breadcrumb">
					<ul class="list flex">
						<li><i class="fa-solid fa-house"></i><a href="/" title="首頁">首頁</a><i
								class="fa-solid fa-chevron-right"></i></li>
						<li><a href="login.asp" title="會員登入">會員登入</a><i class="fa-solid fa-chevron-right"></i></li>
					</ul>
				</div>
				<div class="enterprise-title" data-aos="fade-up" data-aos-duration="1000">會員登入</div>
				<form action="enterprise-news.asp">
					<div class="enterprise-form form-validation" data-aos="fade-up" data-aos-duration="1000">
						<div class="form__field form__field--required">
							<div class="form__inputgroup form__col form__col--w45">
								<input class="form__control" data-val="true"
									data-val-remote="帳號 已被註冊" data-val-remote-additionalfields="*.UserName"
									data-val-remote-type="POST" data-val-remote-url="remote-fail.html"
									data-val-required="請輸入帳號" id="UserName" maxlength="10" name="UserName"
									placeholder="會員帳號" type="text" value="" />
								<span class="field-validation-valid text-danger" data-valmsg-for="UserName"
									data-valmsg-replace="true"></span>
							</div>
						</div>
						<div class="form__field form__field--required">
							<div class="form__inputgroup form__col form__col--w45">
								<input class="form__control" data-val="true"
									data-val-length="密碼 的長度至少必須為 4 個字元。" data-val-length-max="20"
									data-val-length-min="4" data-val-regex="密碼 格式錯誤"
									data-val-regex-pattern="^[A-Za-z0-9]{4,20}$" data-val-required="請輸入密碼" id="Password"
									name="Password" placeholder="會員密碼" type="password" />
								<span class="field-validation-valid text-danger" data-valmsg-for="Password"
									data-valmsg-replace="true"></span>
							</div>
						</div>
						<div class="form__field form__field--required">
							<div class="form__inputgroup form__col flex form__col--w85">
								<div class="form__col form__col--w25">
									<input Value="" class="form__control form__control--codewidth" data-val="true"
										data-val-regex="驗證碼格式錯誤" data-val-regex-pattern="^[0-9]{4}$"
										data-val-required="請輸入驗證碼" id="VerifyCode" maxlength="4" name="VerifyCode"
										placeholder="驗證碼" type="number" value="" />
									<span class="field-validation-valid text-danger icon-warning"
										data-valmsg-for="VerifyCode" data-valmsg-replace="true"></span>
								</div>
								<span class="login__formrow--valid flex">
									<div>
										<img class="" id="captcha" src="images/Recaptcha.png" alt="" />
										<img class="reset-captcha" src="images/reset.svg" alt="change"
											style="cursor: pointer;" />
									</div>
								</span>
							</div>
						</div>
					</div>
					<button class="enterprise-btn flex" type="submit" value="登入">登入</button>
				</form>
			</div>
		</div>
	</main>
	<!--#include file="footer.asp"-->
	<!--#include file="common-script.asp"-->
	<!--必要-->
<script src="js/validation/jquery.validate.js"></script>
<script src="js/validation/jquery.validate.unobtrusive.js"></script>
<!--必要-->
<!--Optional, 用於 1.requiredifnotempty: A欄位有填寫則B欄位也必須填寫 2.requiredif: A欄位等於某個值時則B欄位必須填寫-->
<script src="js/validation/jquery.validator.requiredIf.js"></script>
<!--Optional-->
<script src="js/dist/common-form.js"></script>
<script>
	$(function () {
		//Demo: invoice options changed
		$('input[name="InvoiceType"]').change(function (e) {
			let $invoiceBusiness = $('.invoice-business');
			if ($(this).val() === '2') {
				$invoiceBusiness.show();
			} else {
				$invoiceBusiness.hide();
			}
		});

		//Optional: Do something after submit, i.g. block the page
		$('form.form-validation').submit(function (e) {
			if ($(this).valid()) {

			}
		});
	});
</script>
</body>

</html>
/* let wp_json = (
	'{"client":[{"logo":16,"payLink":"http://www.naver.com","memberChk":"N","today_point":"4","total_point":"100","data":[{"logo":"bibiesong-1216726537000.png","price":"63000", "prdt_prmct":"60000", "dc_rate":"50", "pnm":"[핫딜]츠링데님원피스","t0":"","purl":"/servlet/drc?no=1183&kno=0&s=82&adgubun=SR&gb=SR&sc=89c67bfff3c645982ab17fa212af9c8b&mc=82&userid=bibiesong&u=bibiesong&product=nor&slink=http%3A%2F%2Fwww.bibiesong.com%2Fproduct%2Fdetail.html%3Fproduct_no%3D1183%26cate_no%3D27%26display_group%3D1&rtb_param=WY09E07C01W061_0_1_CW_A&freqLog=19&viewTime=_82_1434604974429_383","img":"https://www.dabagirl.co.kr/web/product/big/202105/04ff60dbb9fa51e3c47fc8e4bdc27c08.jpg","imageSqreYn":"N","pcode":"1183","site_name":"비비에송","logo2":"bibiesong-1502410438000.png","site_desc1":"패션은 지금 당장 다바걸!","site_desc2":"다바걸은 옷 하나만 사도 무료배송!","site_desc3":"신규 가입하고 다양한 혜택 받자! 최대 총 1만원 3종 쿠폰 발급","site_desc4":"사이트설명4", "advrtsReplcNm":"", "monetaryUnit":"$","cta_text":"바로가기","site_title":"다바걸","time_product_sale_price":"1200000","time_proudct_price":"1300000","time_date":"202410311130", "time_title_use_yn":"NY", "time_product_use_yn":"NY", "time_product_name" : "상품명상품명상품명상품명상품명상품명상품명상품명상품명"}],"length":16,"target":"UM","site_title":"다바걸","oslink":""}]} '
);
base_default_script_type0(); */
/* 여기 위로 삭제 */
/* const obj = $.parseJSON(wp_json).client[0].data[0]; */

$(window).load(() => {
	$('.item').draggable({
		revert: "invalid",
		cursor: "move",
		helper: "clone",
		start: function (event, ui) {
			$(this).addClass("dragging");
		},
		stop: function (event, ui) {
			$(this).removeClass("dragging");
		}
	});

	$('.box').droppable({
		accept: ".item",
		drop: function (event, ui) {
			const $ballClone = ui.helper.clone();
			$ballClone.css({
				position: "absolute",
				top: "0",
				left: "0"
			}).appendTo($(this));
			ui.draggable.css({
				visibility: "hidden"
			});

			$(this).css('border', 'none');
			$('.box_wrap_bg').addClass('active')
			$('.gift_title span').addClass('active').text('1등 선물세트 완성!!');

			setTimeout(function () {
				window.location.href = "https://www.dongwonmall.com/index.do";
			}, 2000);
		}
	});
});
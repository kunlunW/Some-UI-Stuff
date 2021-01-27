class Cart {
	


	
	
	addCourse(key, classData, cartList, secK, subsecK) {
        
        if(secK === "0") {
			cartList[key] = classData;
        } 
        else if (subsecK === "0") {
            var s = classData.sections;
			for(const sec of Object.entries(s)) {
				if(secK === sec[0]) {
					let classExist = false;
					for(const classes of Object.entries(cartList)) {


						if(key === classes[0]) {
                            classExist = true;
                            var jstring = JSON.stringify(classes[1])
							let JSParsedInfo = JSON.parse(jstring);
							JSParsedInfo.sections[secK] = sec[1];
							cartList[key] = JSParsedInfo;
							break;
						}
					}
					

					if(!classExist) {

						
                        var jstring = JSON.stringify(classData)
						let JSParsedInfo = JSON.parse(jstring);
						
						JSParsedInfo.sections = {};


						JSParsedInfo.sections[secK] = sec[1];

						cartList[key] = JSParsedInfo;
					}
				}
            }
            

        } 
        
        else {
            let secKey = secK.key;
            var d = classData.sections[secKey].subsections;
			for(const sub of Object.entries(d)) {

            
    
				if(subsecK === sub[0]) {
                    
                    let classExist = false;
                   
					let secFound = false;
					

					for(const classes of Object.entries(cartList)) {


						if(key === classes[0]) {
							classExist = true;

							var secs = classes[1].sections;
							for(const sec of Object.entries(secs)) {
                                

								if(secKey === sec[0]) {
                                    secFound = true;
									var jstring = JSON.stringify(sec[1]);
									
									
									let JSParsedInfo = JSON.parse(jstring);

									JSParsedInfo.subsections[subsecK] = sub[1];

									cartList[key].sections[secKey] = JSParsedInfo;
									break;
								}
							}
							
							if(!secFound) {
								
								var jstring = JSON.stringify(classes[1]);
								let secInformation = JSON.parse(jstring);
								secInformation.sections[secKey] = classData.sections[secKey];
								cartList[key] = secInformation;
								
								var secNum = cartList[key].sections[secKey]
								var secInfo = JSON.stringify(secNum)
								let JSParsedInfo = JSON.parse(secInfo);

								JSParsedInfo.subsections = {};

								JSParsedInfo.subsections[subsecK] = sub[1];

								cartList[key].sections[secKey] = JSParsedInfo;
							}
						}
					}
					
					if(!classExist) {

						var classSec = classData.sections; 
						for(const sec of Object.entries(classSec)) {

							if(secKey === sec[0]) {

								var jstring = JSON.stringify(classData); 

								let secInformation = JSON.parse(jstring);

								secInformation.sections = {};

								secInformation.sections[secKey] = sec[1];

								cartList[key] = secInformation;
								break;
							}
						}
						var cartsec = cartList[key].sections[secKey]
						var parseString = JSON.stringify(cartsec)
						let JSParsedInfo = JSON.parse(parseString);

						JSParsedInfo.subsections = {};

						JSParsedInfo.subsections[subsecK] = sub[1];

						cartList[key].sections[secKey] = JSParsedInfo;
					}
				}
			}
		}
		return cartList;
	}
	
	removeCart(key, classData, cartList, secK, subsecK) {

		if(secK === "0") {
			delete cartList[key];

		} else if (subsecK === "0") {

			var cartkeyList = cartList[key].sections;

			if(Object.entries(cartkeyList).length === 1) {

				delete cartList[key];

			} 
			else {
				var cartListString = JSON.stringify(cartList[key]);
				let JSParsedInfo = JSON.parse(cartListString);

				delete JSParsedInfo.sections[secK];
				cartList[key] = JSParsedInfo;
			}

		} 
		
		else {

			let secKey = secK.key;
			
			var subList = cartList[key].sections[secKey].subsections; 

			if(Object.entries(subList).length === 1) {

				var cartListSec = cartList[key].sections; 

				if(Object.entries(cartListSec).length === 1) {

					delete cartList[key];

				} 
				
				else {
					var ck = cartList[key]
					var jstring = JSON.stringify(ck)
					let JSParsedInfo = JSON.parse(jstring);
					delete JSParsedInfo.sections[secKey];
					cartList[key] = JSParsedInfo;
				}
			} 
			else {

				var ck = cartList[key]
				var jstring = JSON.stringify(ck);

				let secInformation = JSON.parse(jstring);

				delete secInformation.sections[secKey].subsections[subsecK];

				cartList[key] = secInformation;
			}
		}
		return cartList;
	}
}

export default Cart;

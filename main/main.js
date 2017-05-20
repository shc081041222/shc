const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	
	var itembarcode;  
	var item_list=[];      
	var list='***<没钱赚商店>购物清单***\n';  
	var sum=0;
    let item_Table = loadAllItems();	
	for(var i=0;i<inputs.length;i++){  
		itembarcode=inputs[i];  
		if(item_list.length==0){ 
			for(var k = 0; k < item_Table.length; k++){
				if(itembarcode == item_Table[k].barcode){
					item_Table[k].count = 1;
					item_list.push(item_Table[k]);
					
				}
			}          
		}  
		else{
			var temp = 0;
			for(var j=0;j<item_list.length;j++){  
				if(itembarcode == item_list[j].barcode){  
					item_list[j].count++; 
					temp++;
				}  
			}
			if(temp == 0){
				for(var k = 0; k < item_Table.length; k++){
					if(itembarcode == item_Table[k].barcode){
						item_Table[k].count = 1;
						item_list.push(item_Table[k]);
					
					}
				}  				
			}
		}  
    } 
	
	for(var j = 0; j < item_list.length; j++){
		sum += item_list[j].count*item_list[j].price;
		
		list = list  + '名称：'+item_list[j].name+'，'+'数量：'+item_list[j].count+item_list[j].unit+'，'+'单价：'+item_list[j].price.toFixed(2)+'(元)' +'，'+'小计：'+(item_list[j].count*item_list[j].price).toFixed(2)+'(元)'+'\n';  
	}
	
	list = list + '----------------------\n' + '总计：' + sum.toFixed(2) +'(元)' + '\n' + '**********************';
	
	
	
    console.log("Debug Info");
    return list;
};

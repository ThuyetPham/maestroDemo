const { HHTh_1 } = require('../../data/Hang_hoa_fixdata/HH_thuong.js');
const { API_CONFIG, getHeaders, ENDPOINTS } = require('../common/config.js');

async function createProduct() {

  const res = await fetch(
    `${API_CONFIG.baseUrl}${ENDPOINTS.products.addMany}`,
    {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        products: [
          {
            code: HHTh_1.code,
            name: HHTh_1.name,
            basePrice: parseInt(HHTh_1.price),
            cost: parseInt(HHTh_1.cost),
            onHand: parseInt(HHTh_1.onhand)
          }
        ]
      })
    }
  );

  const data = await res.json();

  console.log("Đã tạo sản phẩm:", data);

}

createProduct();
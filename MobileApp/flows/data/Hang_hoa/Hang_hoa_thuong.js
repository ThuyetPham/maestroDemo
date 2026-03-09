// Tạo mảng danh sách hàng hóa (dùng tiếng Việt không dấu vì Maestro không hỗ trợ Unicode)
output.list_hang_hoa_thuong = [
  {
    code: 'HHTauto001',
    name: 'Hang hoa thuong 1',
    category: 'Bánh nhập KM',
    cost: '10000',
    price: '12000',
    onhand: '1000'
  },
  {
    code: 'HHTauto002',
    name: 'Hang hoa thuong 2',
    category: 'Bánh nhập KM',
    cost: '15000',
    price: '18000',
    onhand: '2000'
  }
]

// Khởi tạo biến đếm cho loop
output.currentIndex = 0
output.totalItems = output.list_hang_hoa_thuong.length

output.hang_hoa_thuong_1 = {
    code: 'SPauto01001',
    name: 'chocolate cake',
    category: 'Bánh nhập KM',
    cost: '20000',
    price: '25000',
    onhand: '2000'
}

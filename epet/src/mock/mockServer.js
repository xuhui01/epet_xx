import Mock from 'mockjs'
import home from './home.json'
import fengqiang from './meirifengqiang.json'
import brandData from './brandData.json'
import categoryLeftData from './categoryLeftData.json'
import rightData_88888 from './rightData-88888.json'
import rightData_5 from './rightData-5.json'
import rightData_6 from './rightData-6.json'
import rightData_55 from './rightData-55.json'
import rightData_4311 from './rightData-4311.json'
import rightData_54 from './rightData-54.json'
import rightData_53 from './rightData-53.json'
import rightData_48 from './rightData-48.json'
import rightData_49 from './rightData-49.json'
import rightData_2652 from './rightData-2652.json'
import rightData_2651 from './rightData-2651.json'
import rightData_3895 from './rightData-3895.json'
import rightData_4315 from './rightData-4315.json'


Mock.mock('/api/main/home', {
  code: 0,
  home: home
});
Mock.mock('/api/main/fengqiang', {
  code: 0,
  data: fengqiang.data["3"]
});
Mock.mock('/api/categoryLeftData', {
  code: 0,
  data: categoryLeftData
});
Mock.mock('/api/rightData?owner=88888', {
  code: 0,
  data: rightData_88888
});
Mock.mock('/api/rightData?owner=5', {
  code: 0,
  data: rightData_5
});
Mock.mock('/api/rightData?owner=6', {
  code: 0,
  data: rightData_6
});
Mock.mock('/api/rightData?owner=55', {
  code: 0,
  data: rightData_55
});
Mock.mock('/api/rightData?owner=4311', {
  code: 0,
  data: rightData_4311
});
Mock.mock('/api/rightData?owner=54', {
  code: 0,
  data: rightData_54
});
Mock.mock('/api/rightData?owner=53', {
  code: 0,
  data: rightData_53
});
Mock.mock('/api/rightData?owner=48', {
  code: 0,
  data: rightData_48
});
Mock.mock('/api/rightData?owner=49', {
  code: 0,
  data: rightData_49
});
Mock.mock('/api/rightData?owner=2652', {
  code: 0,
  data: rightData_2652
});
Mock.mock('/api/rightData?owner=2651', {
  code: 0,
  data: rightData_2651
});
Mock.mock('/api/rightData?owner=3895', {
  code: 0,
  data: rightData_3895
});
Mock.mock('/api/rightData?owner=4315', {
  code: 0,
  data: rightData_4315
});
// 品牌
Mock.mock('/api/category/brand/list', {
  code: 0,
  brand: brandData.brand
});

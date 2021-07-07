module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'node'],

  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$', // Jest使用模式或模式来检测测试文件
};

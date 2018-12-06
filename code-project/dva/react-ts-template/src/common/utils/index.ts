/**
 * 本文件定义：
 * 公用方法
 */
namespace Utils {

  /**
   * 是否是开发环境
   * @returns {boolean}
   */
  export const isLocal = (): boolean => {
    return process.env.NODE_ENV === 'development';
  };

}

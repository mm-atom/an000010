import moment from 'moment';

/**
 * 日期类型转换成时间戳
 * @param time 日期
 * @param format 字符串的格式
 */
export default function parse(time: string, format: string) {
	return moment(time, format).valueOf();
}

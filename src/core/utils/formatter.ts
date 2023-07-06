import dayjs from "dayjs"

export const FormatDate = (date: string): string => {
    return dayjs(date).format('DD/MM/YYYY')
}
import { useSelector } from "react-redux";

export function useInfoAll() {
    const {infoAll, infoEach, status, error} = useSelector(state => state.fetchAll)

    return {
        infoAll,
        infoEach,
        status,
        error
    }
}
import { useSelector } from "react-redux";

export function useFirstInfo() {
    const {infoFirst, status, error} = useSelector(state => state.fetchFirst)

    return {
        infoFirst,
        status,
        error
    }
}
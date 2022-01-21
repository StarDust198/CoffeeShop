import AppHeader from "../app-header/app-header"
import AppAboutUs from "../app-about-us/app-about-us"
import AppBest from "../app-best/app-best"

export default function MainPage() {
    return (
        <>
            <AppHeader page={0} />
            <AppAboutUs/>
            <AppBest/>
        </>
    )        
}
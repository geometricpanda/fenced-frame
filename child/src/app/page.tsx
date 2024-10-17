import {auth} from "@/auth";
import {redirect} from "next/navigation";

const Page = async () => {

    const session = await auth();

    if (!session) {
        return redirect('/api/auth/do-signin');
    }

    return (
        <>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </>
    )
        ;
}

export default Page;

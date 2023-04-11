import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { api } from '~/utils/api';
import '~/styles/main.css';

import HomeHeader from '~/components/Home/Header';
import Header from '~/components/Navigation/Header/Header';
import Footer from '~/components/Navigation/Footer/Footer';
import { SiteInto } from '~/data/Site';

let reloadInterval: NodeJS.Timer;

function lazyReload() {
    clearInterval(reloadInterval);
    reloadInterval = setInterval(() => {
        if (document.hasFocus()) {
            window.location.reload();
        }
    }, 100);
}

function forcePageReload(registration: ServiceWorkerRegistration) {
    if (!navigator.serviceWorker.controller) {
        return;
    }

    if (registration.waiting) {
        registration.waiting.postMessage('skipWaiting');
        return;
    }

    function listenInstalledStateChange() {
        registration.installing?.addEventListener('statechange', function () {
            if (this.state === 'installed' && registration.waiting) {
                registration.waiting.postMessage('skipWaiting');
            } else if (this.state === 'activated') {
                lazyReload();
            }
        });
    }

    if (registration.installing) {
        listenInstalledStateChange();
        return;
    }

    registration.addEventListener('updatefound', listenInstalledStateChange);
}

async function registerServiceWorker() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/sw.js');
        forcePageReload(registration);
    }
}

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    const router = useRouter();

    useEffect(() => {
        void registerServiceWorker();
    }, []);

    return (
        <SessionProvider session={session}>
            {router.route === '/' ? (
                <>
                    <HomeHeader />
                    <Component {...pageProps} />
                </>
            ) : (
                <>
                    <Header />
                    <Component {...pageProps} />
                    <Footer title={SiteInto.title} text={SiteInto.copyright} />
                </>
            )}
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);

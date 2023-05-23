function MyApp({ Component, pageProps }) {
    const router = useRouter();
  
    // Optional: Add a global event listener for route changes
    React.useEffect(() => {
      const handleRouteChange = (url) => {
        console.log('Route changed:', url);
      };
  
      router.events.on('routeChangeComplete', handleRouteChange);
  
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }, []);
  
    return <Component {...pageProps} />;
  }
  
  export default MyApp;
  
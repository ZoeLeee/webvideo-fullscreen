if (window.self !== window.top) {
    window.addEventListener("message", (event) => {
        if (event.data?.type === "IS_EXIST_VIDEO") {
            console.log('event.origin: ', event.origin);
            event.source?.postMessage({
                type: 'IS_EXIST_VIDEO_RESULT',
                id: event.data.id,
                data: !!document.querySelector('video')
            }, { targetOrigin: event.origin });
        }
    });
}

//const ip = import.meta.env.VITE_OWN_SERVER_GIT;
const ip = import.meta.env.VITE_IP_LOCAL;
const TestIframe = () => {
return (
    <div>
        <div>
            <iframe
                title="test-iframe"
                src={`${ip}/map-google/CR-001?iframe=true`}
                width="450"
                height="240"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
            <iframe
                title="test-iframe"
                src={`${ip}/map-google/CR-002?iframe=true`}
                width="450"
                height="240"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
        <div>
            <iframe
                title="test-iframe"
                src={`${ip}/map-google/CR-004?iframe=true`}
                width="450"
                height="240"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
            <iframe
                title="test-iframe"
                src={`${ip}/map-google/CR-005?iframe=true`}
                width="450"
                height="240"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
        <div>
            <iframe
                title="test-iframe"
                src={`${ip}/map-google/CR-006?iframe=true`}
                width="450"
                height="240"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
            <iframe
                title="test-iframe"
                src={`${ip}/map-google/CR-007?iframe=true`}
                width="450"
                height="240"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
        <div>
            <iframe
                title="test-iframe"
                src={`${ip}/map-google/CR-008?iframe=true`}
                width="450"
                height="240"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
    </div>
)
};
export default TestIframe;
import { Facebook } from "@deemlol/next-icons";
import { Instagram } from "@deemlol/next-icons";
import { Linkedin } from "@deemlol/next-icons";

const page = () => {
  return (
    <div className="start">
      <nav>
        <ul>
            <li><svg  className="icon icon-logo-mortgage" height="34" role="img" version="1.1" viewBox="0 0 62 31" width="67" xmlns="http://www.w3.org/2000/svg"><title>Better Mortgage</title><path d="M42.26 12.43h2.975V6.652c.277-.872 1.574-1.687 3.446-1.28V2.541c-1.556 0-2.895 1.009-3.446 2.618V2.735h-2.974v9.695Zm-4.843-7.774c.906 0 1.359.484 1.359.95 0 .679-.552 1.359-3.624 1.706 0-1.59 1.025-2.656 2.265-2.656Zm3.8 6.882v-2.58c-.984.816-2.304 1.262-3.368 1.262-1.103 0-1.988-.581-2.423-1.511 3.9-.27 5.81-1.59 5.81-3.452 0-1.493-1.556-2.752-3.723-2.752-2.876 0-5.198 2.074-5.198 5.1 0 2.85 2.382 4.962 5.376 4.962 1.282-.002 2.581-.369 3.526-1.029ZM30.15 9.425V4.656h2.027v-1.9l-2.027.021V.45l-5.633 3.917V.955l-4.707 3.49v.213h1.773V9.97c0 1.687 1.261 2.58 2.975 2.58.748 0 1.38-.136 1.95-.465v-1.998a2.01 2.01 0 0 1-.985.273c-.63 0-1.004-.311-1.004-.854V4.658h2.698v5.294c0 1.705 1.26 2.597 2.992 2.597.769 0 1.398-.097 2.01-.464V10.07c-.257.155-.65.29-1.044.29-.632-.004-1.025-.332-1.025-.934ZM15.794 4.656c.907 0 1.36.484 1.36.95 0 .679-.552 1.359-3.625 1.706 0-1.59 1.023-2.656 2.265-2.656Zm3.8 6.882v-2.58c-.983.816-2.303 1.262-3.367 1.262-1.103 0-1.988-.581-2.423-1.511 3.899-.27 5.81-1.59 5.81-3.452 0-1.493-1.556-2.752-3.723-2.752-2.876 0-5.199 2.074-5.199 5.1 0 2.85 2.382 4.962 5.377 4.962 1.281-.002 2.58-.369 3.526-1.029ZM5.298 7.215c.924 0 1.693.563 1.693 1.512 0 .892-.769 1.435-1.693 1.435H3.052V7.215h2.245Zm-.158-4.963c.886 0 1.595.543 1.595 1.377 0 .892-.71 1.435-1.595 1.435H3.052V2.252H5.14ZM0 .002V12.43h5.947c2.283 0 4.077-1.376 4.077-3.471 0-1.338-.867-2.404-2.128-2.908 1.142-.505 1.91-1.494 1.91-2.677C9.807 1.338 7.996 0 5.692 0H0v.002Z" fill="#017848"></path><path d="m5.613 24.595 3.682-5.75v8.345h1.192V16.567H9.4l-4.149 6.625-4.165-6.625H0V27.19h1.192v-8.344l3.682 5.749h.74ZM15.796 19.404c-2.248 0-3.908 1.75-3.908 3.984 0 2.233 1.66 3.983 3.908 3.983 2.233 0 3.893-1.75 3.893-3.983 0-2.234-1.66-3.984-3.893-3.984Zm0 1.102c1.584 0 2.701 1.312 2.701 2.882 0 1.569-1.117 2.882-2.7 2.882-1.6 0-2.717-1.313-2.717-2.882 0-1.57 1.117-2.882 2.716-2.882ZM29.519 26.073c-.332.181-.71.227-.92.227-.83 0-1.313-.453-1.313-1.373v-4.361h1.961v-.98h-1.961v-2.098h-1.162v7.56c0 1.478.875 2.323 2.248 2.323.483 0 .875-.09 1.147-.226v-1.072Zm-7.364-6.488h-1.131v7.605h1.162v-3.863c0-1.72.95-2.761 2.353-2.761.106 0 .242 0 .317.015V19.45a1.64 1.64 0 0 0-.422-.045c-1.026 0-1.886.573-2.279 1.645v-1.464ZM36.352 25.862v.95c0 1.585-1.071 2.52-2.565 2.52-1.117 0-2.067-.467-2.671-1.222l-.785.74c.77.966 1.992 1.539 3.456 1.539 2.112 0 3.681-1.373 3.681-3.456v-7.348h-1.161v1.298c-.453-.86-1.57-1.479-2.686-1.479-2.022 0-3.622 1.69-3.622 3.984 0 2.293 1.6 3.983 3.622 3.983 1.131 0 2.278-.634 2.73-1.509Zm-2.55.438c-1.434 0-2.626-1.222-2.626-2.912s1.192-2.913 2.626-2.913c1.313 0 2.58 1.057 2.58 2.913 0 1.87-1.283 2.912-2.58 2.912ZM43.687 22.165v.363c-2.52-.197-4.994.347-4.994 2.625 0 1.313 1.04 2.218 2.43 2.218 1.146 0 2.096-.573 2.64-1.554v1.373h1.086v-4.934c0-1.765-1.177-2.852-3.018-2.852-1.313 0-2.293.558-2.942 1.328l.619.754c.497-.573 1.297-1.04 2.233-1.04 1.207 0 1.946.663 1.946 1.72Zm-2.399 4.21c-.845 0-1.464-.513-1.464-1.282 0-1.343 1.389-1.72 2.837-1.72.362 0 .724.015 1.072.06v.558c0 1.192-1.057 2.384-2.445 2.384ZM52.415 25.862v.95c0 1.585-1.072 2.52-2.566 2.52-1.116 0-2.067-.467-2.67-1.222l-.785.74c.77.966 1.992 1.539 3.455 1.539 2.113 0 3.682-1.373 3.682-3.456v-7.348H52.37v1.298c-.452-.86-1.569-1.479-2.685-1.479-2.023 0-3.622 1.69-3.622 3.984 0 2.293 1.6 3.983 3.622 3.983 1.131 0 2.278-.634 2.73-1.509Zm-2.55.438c-1.434 0-2.626-1.222-2.626-2.912s1.192-2.913 2.626-2.913c1.312 0 2.58 1.057 2.58 2.913 0 1.87-1.283 2.912-2.58 2.912ZM58.53 19.404c-2.234 0-3.818 1.75-3.818 3.984 0 2.248 1.584 3.983 3.999 3.983 1.237 0 2.233-.422 3.063-1.328l-.725-.8a2.992 2.992 0 0 1-2.308 1.057c-1.494 0-2.671-.996-2.807-2.58h6.006c.03-.197.06-.468.06-.725 0-1.991-1.343-3.59-3.47-3.59Zm0 1.056c1.282 0 2.293.875 2.338 2.279v.03H55.95c.181-1.373 1.223-2.309 2.58-2.309Z" fill="#6F7672"></path></svg></li>
            <li><p><svg  fill="none" height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg"><title strokeOpacity="0" stroke="#000000" fill="none">Phone</title><path clipRule="evenodd" d="M1.1116 0.0151367H5.00049C5.6116 0.0151367 6.1116 0.516439 6.1116 1.12914C6.1116 2.52165 6.33382 3.85845 6.74493 5.10614C6.86715 5.49604 6.77827 5.9305 6.46715 6.24242L4.02271 8.69323C5.62271 11.8459 8.20049 14.4192 11.3449 16.0345L13.7894 13.5837C14.0116 13.3721 14.2894 13.2607 14.5783 13.2607C14.6894 13.2607 14.8116 13.2718 14.9227 13.3164C16.1672 13.7285 17.5116 13.9513 18.8894 13.9513C19.5005 13.9513 20.0005 14.4526 20.0005 15.0653V18.9532C20.0005 19.5659 19.5005 20.0672 18.8894 20.0672C8.45604 20.0672 0.000488281 11.5896 0.000488281 1.12914C0.000488281 0.516439 0.500488 0.0151367 1.1116 0.0151367ZM3.93382 2.24315C4.00049 3.23461 4.16715 4.20379 4.43382 5.12842L3.10049 6.46522C2.64493 5.12842 2.35604 3.71363 2.25604 2.24315H3.93382ZM14.8894 15.6335C15.8338 15.9008 16.8005 16.0679 17.7783 16.1348V17.7947C16.3116 17.6944 14.9005 17.4047 13.556 16.9591L14.8894 15.6335Z" fill="#017848" fillRule="evenodd" strokeOpacity="0" stroke="#000000"></path></svg>Need help? Call (415) 523 8837</p></li>
        </ul>
      </nav>
      <div className="avatar">
      <div className="image">
    <img src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg"/>
</div>
      </div>
      <div className="intro">
        <h1 style={{textAlign:"center"}}>Hi, I'm Besty! <br /> What can i help you with?</h1>
        <button><svg  fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg"><title id="start-purchase-icon" fillOpacity="0" fill="#000000">Start Purchase</title><path d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z" fill="#017848"></path><path d="M16.8 13v2.374h-1.2a3.607 3.607 0 0 0-3.118 1.78 3.527 3.527 0 0 0 0 3.56 3.607 3.607 0 0 0 3.118 1.78h4.8c.429 0 .825.227 1.04.594.214.367.214.82 0 1.187-.215.367-.611.593-1.04.593h-4.8c-.318 0-.624-.125-.849-.347a1.18 1.18 0 0 1-.351-.84H12c0 .945.38 1.85 1.054 2.518a3.622 3.622 0 0 0 2.546 1.043h1.2v2.373h2.4v-2.373h1.2a3.607 3.607 0 0 0 3.118-1.78 3.526 3.526 0 0 0 0-3.56A3.607 3.607 0 0 0 20.4 20.12h-4.8c-.429 0-.825-.226-1.04-.593a1.176 1.176 0 0 1 0-1.187c.215-.367.611-.594 1.04-.594h4.8c.318 0 .624.125.849.348.225.222.351.524.351.84H24c0-.945-.38-1.85-1.054-2.519a3.621 3.621 0 0 0-2.546-1.042h-1.2V13h-2.4Z" fill="#017848"></path></svg> Buying a home</button>
        <button><svg  fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg"><title id="start-refinance-icon" fillOpacity="0" fill="#000000">Start Refinance</title><path d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z" fill="#017848"></path><path d="M17.6 15v1.768h-.9c-.965 0-1.856.505-2.338 1.326a2.61 2.61 0 0 0 0 2.651 2.709 2.709 0 0 0 2.338 1.326h3.6c.322 0 .619.169.78.442a.87.87 0 0 1 0 .884.903.903 0 0 1-.78.442h-3.6a.908.908 0 0 1-.636-.259.876.876 0 0 1-.264-.625H14c0 .704.284 1.378.79 1.876a2.725 2.725 0 0 0 1.91.776h.9v1.768h1.8v-1.768h.9c.965 0 1.856-.505 2.338-1.326a2.61 2.61 0 0 0 0-2.651 2.709 2.709 0 0 0-2.338-1.326h-3.6a.903.903 0 0 1-.78-.442.87.87 0 0 1 0-.884.903.903 0 0 1 .78-.442h3.6c.239 0 .468.093.636.259.17.165.264.39.264.625H23c0-.704-.285-1.378-.79-1.876a2.725 2.725 0 0 0-1.91-.776h-.9V15h-1.8Z" fill="#017848"></path><path d="M18.456 10C12.5 10 7.67 14.83 7.67 20.785H6l2.869 4.782 2.865-4.782h-1.667a8.383 8.383 0 0 1 8.389-8.388 8.383 8.383 0 0 1 8.389 8.388 8.383 8.383 0 0 1-8.39 8.389 8.32 8.32 0 0 1-5.919-2.469l-1.702 1.702a10.73 10.73 0 0 0 7.622 3.164c5.956 0 10.785-4.83 10.785-10.786C29.241 14.83 24.411 10 18.456 10Z" fill="#017848"></path></svg>Refinance my mortgage</button>
        <button><svg  fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg"><title id="start-cashout-refinance-icon" fillOpacity="0" fill="#000000">Start Cashout Refinance</title><path d="M2.25 18a15.75 15.75 0 0 1 31.5 0H36a18 18 0 1 0-18 18v-2.25A15.75 15.75 0 0 1 2.25 18Z" fill="#017848"></path><path d="M23.143 20.204c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-4.457c-.398 0-.766-.21-.965-.551a1.092 1.092 0 0 1 0-1.102c.199-.341.567-.551.965-.551H19.8c.296 0 .579.116.788.323.209.206.326.487.326.779h2.229c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-1.114v-2.204h-2.229v2.204h-1.114a3.35 3.35 0 0 0-2.895 1.653 3.275 3.275 0 0 0 0 3.306 3.35 3.35 0 0 0 2.895 1.653H19.8c.398 0 .766.21.965.551.199.341.199.761 0 1.102-.199.341-.567.551-.965.551h-4.457a1.12 1.12 0 0 1-.788-.323 1.096 1.096 0 0 1-.326-.779H12c0 .877.352 1.718.979 2.338.627.62 1.477.968 2.364.968h1.114v2.204h2.229V23.51H19.8c.887 0 1.737-.348 2.364-.968.627-.62.979-1.461.979-2.338ZM29.852 19.97a1.13 1.13 0 0 0-1.429 0l-5.714 4.653a1.17 1.17 0 0 0-.423.907v9.307c0 .308.12.604.334.822.215.218.506.341.809.341h11.428c.303 0 .594-.123.808-.34.215-.219.335-.515.335-.823V25.53a1.171 1.171 0 0 0-.434-.907l-5.714-4.654Zm3.862 13.703H31.43v-3.49c0-.308-.12-.604-.335-.822a1.133 1.133 0 0 0-.808-.34H28c-.303 0-.594.122-.808.34a1.174 1.174 0 0 0-.335.822v3.49h-2.285V26.09l4.571-3.723 4.571 3.723v7.584Z" fill="#017848"></path></svg> Get cash from my home</button>

        <div className="value">
            <div className="left">
                <h1>$100B</h1>
                <p>home loans funded entirely online</p>
            </div>
            <div className="right">
                <h1>400K</h1>
                <p>Customers who chose a Better Mortgage</p>
            </div>
        </div>
        <div className="intro-details">
            <h1> After a afew questions, you'll unlock</h1>
            <p><svg xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1xbrwhv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MonetizationOnOutlinedIcon" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42" fill="#017848"></path></svg> Custom mortgage rates</p>
            <p><svg  xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1xbrwhv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIphoneOutlinedIcon" width="24" height="24"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z" fill="#017848"></path></svg> Exclusive offers</p>
            <p><svg viewBox="0 0 22 22" fill="none" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><title id="percentage-outlined-icon" fill="none">Percentage Outlined</title><path clipRule="evenodd" d="M10 .833C4.94.833.833 4.94.833 10S4.94 19.166 10 19.166 19.167 15.06 19.167 10C19.167 4.94 15.06.833 10 .833Zm0 16.5c-4.042 0-7.333-3.29-7.333-7.333S5.957 2.666 10 2.666 17.333 5.957 17.333 10c0 4.042-3.29 7.333-7.333 7.333ZM7.458 15H5.5l7.057-10h1.958L7.458 15ZM7 9.476a1.71 1.71 0 0 0 1.716-1.738C8.716 6.748 7.946 6 7 6c-.968 0-1.738.748-1.738 1.738S6.032 9.476 7 9.476Zm6 4.5a1.71 1.71 0 0 0 1.716-1.738c0-.99-.77-1.738-1.716-1.738-.968 0-1.738.748-1.738 1.738s.77 1.738 1.738 1.738Z" fill="#017848" fillRule="evenodd"></path></svg>A personalized dashboard</p>
        </div>
      </div>

      <div className="four">
    <ul className="first-list">
      <li>
        <h1><span style={{color:"#017848"}}>Better</span></h1>
      </li>
      <li>
      <p>Better is a family of companies serving all your homeownership needs.</p>
      </li>
      <li>
      <h1><span style={{color:"#017848"}}>Better</span> Mortage</h1>
      <p>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
      </li>
      <li>
      <h1><span style={{color:"#017848"}}>Better</span> Real Estate</h1>
      <p>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
      </li>
      <li>
      <h1><span style={{color:"#017848"}}>Better</span> Cover</h1>
      <p>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
      </li>
      <li>
      <h1><span style={{color:"#017848"}}>Better</span> Inspect</h1>
      <p>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
      </li>
      <li>
      <h1><span style={{color:"#017848"}}>Better</span> Settlement Services</h1>
      <p>Get transparent rates when you shop for title insurance all in one convenient place.</p>
      </li>
    </ul>
    <ul className="second-list">
      <li style={{color:"#292b29", fontSize:"1.2em",fontWeight:"500",position:"relative", top:"-2%"}}>Resources</li>
      <li><a>Home affordability calculator</a></li>
      <li><a>Mortage calculator</a></li>
      <li><a>Free mortage calculator</a></li>
      <li><a>Mortage calculator with taxes</a></li>
      <li><a>Mortage calculator with taxes</a></li>
      <li><a>Rent vs buy calculator</a></li>
      <li><a>HELOC payment calculator</a></li>
      <li><a>HELOC vs cash-out refinance calculator</a></li>
      <li><a>Buy a home</a></li>
      <li><a>Sell a home</a></li>
      <li><a>Get home inspection</a></li>
    </ul>
 
  <ul className="third-list">
    <li style={{color:"#292b29", fontSize:"1.2em",fontWeight:"500", position:"relative", top:"-2%"}}>Company</li>
    <li><a>About Us</a></li>
    <li><a>Careers</a></li>
    <li><a>Media</a></li>
    <li><a>Partner With Us</a></li>
    <li><a>Learning center</a></li>
    <li><a>FAQs</a></li>
    <li><a>Investors Relations</a></li>

  </ul>
  <ul className="fourth-list">
    <li style={{color:"#292b29", fontSize:"1.2em",fontWeight:"500",position:"relative", top:"-2%"}}>Contact Us</li>
    <li><a>hello@better.com</a></li>
    <li><a>415-523-8837</a></li>
    <li><a>FAQ</a></li>
    <li><a>Glossary</a></li>
    <li style={{color:"#292b29", fontSize:"1.2em",fontWeight:"500"}}>Legal</li>
    <li><a>NMLS Consumer Access</a></li>
    <li><a>Privacy Policy</a></li>
    <li><a>Terms of Use</a></li>
    <li><a>Disclosures & Licensing</a></li>
    <li><a>Affiliated Business</a></li>
    <li><a>Browser Disclaimer</a></li>
  </ul>

</div>
<div className="five">
    <div className="socials">
      <ul>
        <li><Facebook size={24} color="#333" /></li>
        <li><Instagram size={24} color="#333" /></li>
        <li><Linkedin size={24} color="#333" /></li>
      </ul>
    </div>
    <div className="para-1">
      <p>1 Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.</p>
      <p>2Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.</p>
    <p>3Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.</p>
    </div>
    <div className="para-2">
      <p>© 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.</p>
    <p>Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access</p>
    <p>Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Eq</p>
    <p style={{textDecoration:"underline"}}>New York State Housing and Anti-Discrimination Notice</p>
    <p style={{textDecoration:"underline"}}>New York Standard Operating Procedures</p>
    <p>Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice</p>
    <p>Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.</p>
    <p>Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
    <p>Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.</p>
    <p>Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.</p>
    <p>Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.</p>
    <p>Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</p>
    </div>
  </div>
    </div>
  )
}

export default page

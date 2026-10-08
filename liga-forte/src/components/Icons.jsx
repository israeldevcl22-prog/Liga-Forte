/* Ícones do site. O Sprite entra uma vez no topo da página e o <Icon name="..."/> o reutiliza. */

const traco = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ name }) {
  return (
    <svg aria-hidden="true" focusable="false">
      <use href={`#${name}`} />
    </svg>
  );
}

export function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <symbol id="i-wa" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-feather" viewBox="0 0 24 24">
          <g {...traco}><path d="M20 4c-8 0-14 5-14 12v4M20 4c0 8-5 14-12 14M4 20l9-9" /></g>
        </symbol>
        <symbol id="i-bolt" viewBox="0 0 24 24">
          <g {...traco}><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></g>
        </symbol>
        <symbol id="i-drop" viewBox="0 0 24 24">
          <g {...traco}><path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" /></g>
        </symbol>
        <symbol id="i-clock" viewBox="0 0 24 24">
          <g {...traco}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>
        </symbol>
        <symbol id="i-truck" viewBox="0 0 24 24">
          <g {...traco}>
            <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7" />
            <circle cx="6.5" cy="18" r="1.8" />
            <circle cx="16.5" cy="18" r="1.8" />
          </g>
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24">
          <g {...traco}>
            <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
            <path d="M8.5 12l2.5 2.5 4.5-5" />
          </g>
        </symbol>
        <symbol id="i-medal" viewBox="0 0 24 24">
          <g {...traco}><circle cx="12" cy="9" r="5" /><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" /></g>
        </symbol>
        <symbol id="i-chat" viewBox="0 0 24 24">
          <g {...traco}><path d="M4 5h16v11H9l-5 4z" /></g>
        </symbol>
        <symbol id="i-doc" viewBox="0 0 24 24">
          <g {...traco}><path d="M6 3h9l4 4v14H6zM9 12h7M9 16h7" /></g>
        </symbol>
      </defs>
    </svg>
  );
}

function checker(clicked_id) {
    id = clicked_id;
    x = 1;
    if (id == 'b_cz') {
        x = document.getElementById('cz');
        if (getComputedStyle(x).display === 'none') {
            x.style.display = 'block';
        } else{
            x.style.display = 'none';
        }
    } else if (id == 'b_rur'){
        x = document.getElementById('rur');
        if (getComputedStyle(x).display === 'none') {
            x.style.display = 'block';
        } else{
            x.style.display = 'none';
        }
    } else if (id == 'b_kulicka'){
        x = document.getElementById('kulicka');
        if (getComputedStyle(x).display === 'none') {
            x.style.display = 'block';
        } else{
            x.style.display = 'none';
        }
    } else if (id == 'b_havran'){
        x = document.getElementById('havran');
        if (getComputedStyle(x).display === 'none') {
            x.style.display = 'block';
        } else{
            x.style.display = 'none';
        }
    } else if (id == 'b_451'){
        x = document.getElementById('451');
        if (getComputedStyle(x).display === 'none') {
            x.style.display = 'block';
        } else{
            x.style.display = 'none';
        }
    } else if (id == 'b_farma'){
        x = document.getElementById('farma');
        if (getComputedStyle(x).display === 'none') {
            x.style.display = 'block';
        } else{
            x.style.display = 'none';
        }
    }
}

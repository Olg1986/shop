import {postData} from '../services/servises';
import {openModal, closeModal} from './modals';

const form = () => {
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Upload ...',
        success: 'Thank you, we will contact you soon',
        failure: 'Something went wrong'
    }
    
    forms.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();
        
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            
            item.appendChild(statusMessage);
    
            const formData = new FormData(item);
            
            postData('assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    createThanksModal(message.success);
                })
                .catch(() => {
                    createThanksModal(message.failure);
                })
                .finally(() => {
                    item.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                        closeModal('.overlay');
                        
                    }, 3000);
                });
        });
    });

    
}
export default form;
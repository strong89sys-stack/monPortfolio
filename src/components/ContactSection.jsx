import './../style/contact.css'
import { motion } from 'framer-motion'
export default function ContactSection({contact}) {
    return (
        <>
        <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, ease: 'easeOut'}} className="contact-section" id={contact}>
            <div className="contact">
                <div className="title">
                    <h2>Parlons de votre projet</h2>
                    <p>
                        Prêt à donner vie à vos idées ? N'hésitez pas à me contacter.
                    </p>
                </div>
                <form>
                    <div className="input">
                        <input type="text" placeholder='Nom' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <textarea placeholder='Message' rows="4" ></textarea>
                    <button>Envoyer</button>
                </form>
            </div>
        </motion.section>
        </>
    )
}
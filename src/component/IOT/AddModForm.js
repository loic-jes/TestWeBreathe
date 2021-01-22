import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {ApiRequest} from "../../Helpers"



class AddModForm extends Component {
  render() {

    let date = Date.now();

    return (
      <Formik
        initialValues={{
          nom: "",
          type:"",
          numero:"",
          description:"",
          etat_de_marche:"",
          temperature:"",
          duree_fonctionnement:"",
          donnees_envoyees:"",

        }}
        validationSchema={Yup.object().shape({
          nom: Yup.string().required("Saisissez le nom du module"),
          type: Yup.number().required("Saisissez la référence du type de module (un numéro)"),
          numero : Yup.number().required("Saisissez le numéro du module"),
          description : Yup.string().required("Saisissez la description du module"),


        })}
        onSubmit={(fields) => {

          ApiRequest({table:"modules", fields}, "POST").then((response)=>{
            return response.text().then((text) => {
                if (text) {
                    alert("Le module a bien été inséré en base de données");
                    window.location.href = "/"


                }
            });
        })
        }}
      >
        {({ errors, isValid, dirty, touched }) => (
          <>
            <h3 className="text-center mt-3">Ajouter un nouveau module</h3>

            <Form className="col-6 offset-3">
              <div className="form-group pb-3">
                <label htmlFor="nom">Nom</label>
                <Field
                  name="nom"
                  type="text"
                  className={
                    "form-control" +
                    (errors.nom && touched.nom ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="nom"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="type">Type</label>
                <Field
                  name="type"
                  type="text"
                  className={
                    "form-control" +
                    (errors.type && touched.type ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="type"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              
              <div className="form-group pb-3">
                <label htmlFor="numero">Numero</label>
                <Field
                  name="numero"
                  type="text"
                  className={
                    "form-control" +
                    (errors.numero && touched.numero ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="numero"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>


              <div className="form-group pb-3">
                <label htmlFor="description">Description</label>
                <Field
                  name="description"
                  type="text"
                  className={
                    "form-control" +
                    (errors.description && touched.description ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">

              <label htmlFor="etat_de_marche" style={{ display: 'block' }}>Etat </label>
              <Field name="etat_de_marche" as="select">
              <option value="">Choisir un état</option>
              <option value="1">Fonctionnel</option>
              <option value="0">Non fonctionnel</option>
              </Field>
              </div>

              <div className="form-group pb-3">

              <label htmlFor="temperature" style={{ display: 'block' }}>Temperature </label>
              <Field name="temperature" as="select">
              <option value="">Choisir une température</option>
              <option value="100">100°</option>
              <option value="150">150°</option>
              <option value="200">200°</option>
              <option value="250">250°</option>
              <option value="500">500°</option>
              </Field>
              </div>

              <div className="form-group pb-3">

              <label htmlFor="duree_fonctionnement" style={{ display: 'block' }}> Date de mise en place </label>
              <Field name="duree_fonctionnement" as="select">
              <option value="">Choisir une date de mise en place</option>
              <option value={date}>Aujourd'hui</option>
              <option value={date-86400000}>Hier</option>
              <option value={date-1728000000 }>Il y a 20 jours</option>
              </Field>
              </div>

              <div className="form-group pb-3">

              <label htmlFor="donnees_envoyees" style={{ display: 'block' }}> Nombre de données envoyées </label>
              <Field name="donnees_envoyees" as="select">
              <option value="">Choisir le nombre de données envoyées</option>
              <option value="0">0</option>
              <option value="10">10</option>
              <option value="100">100</option>
              <option value="1000">1000</option>
              </Field>
              </div>

              

              <div className="form-group d-flex justify-content-between">
                <button type="reset" className="btn btn-secondary">
                  Effacer
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!(dirty && isValid)}
                >
                  Valider
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    );
  }
}

export { AddModForm };

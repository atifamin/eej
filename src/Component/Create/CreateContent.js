import React from 'react'

export const CreateContent = () => {
  return (
    <>
        <div className="app-toolbar py-3 py-lg-6">
            <div className="app-container w-auto">
                <h1 className="page-heading text-dark fw-bold fs-2 text-hover-primary">Create</h1>
            </div>
        </div>

        <div id="kt_app_content" className="app-content flex-column-fluid">
            <div id="kt_app_content_container" className="app-container container-fluid">
                <div className="col-12">
                    <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
                        <li className="nav-item mb-md-2">
                            <a className="nav-link w-100 btn btn-flex btn-active-light-primary active" data-bs-toggle="tab" href="#kt_tab_pane_1">
                                <span className="d-flex flex-column align-items-start">
                                    <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.3" y="6" width="16" height="3" rx="1.5" fill="currentColor"/>
                                        <rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="currentColor"/>
                                        <rect width="12" height="3" rx="1.5" fill="currentColor"/>
                                        </svg>
                                    </span>
                                    <span className="fs-4 fw-bold mt-2">1- Profile</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item mb-md-2">
                            <a className="nav-link w-100 btn btn-flex btn-active-light-warning" data-bs-toggle="tab" href="#kt_tab_pane_2">
                                <span className="d-flex flex-column align-items-start">
                                    <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="6" width="16" height="3" rx="1.5" fill="currentColor"/>
                                        <rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="currentColor"/>
                                        <rect opacity="0.3" width="12" height="3" rx="1.5" fill="currentColor"/>
                                        </svg>
                                    </span>
                                    <span className="fs-4 fw-bold mt-2">2-  Analyse de la situation du bénéficiaire (Constats)</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link w-100 btn btn-flex btn-active-light-success" data-bs-toggle="tab" href="#kt_tab_pane_3">
                                <span className="d-flex flex-column align-items-start">
                                    <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.3" y="6" width="16" height="3" rx="1.5" fill="currentColor"/>
                                        <rect y="12" width="8" height="3" rx="1.5" fill="currentColor"/>
                                        <rect opacity="0.3" width="12" height="3" rx="1.5" fill="currentColor"/>
                                        </svg>
                                    </span>
                                    <span className="fs-4 fw-bold mt-2">3- Orientation</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                            <div className="card pt-4 mb-6 mb-xl-9">
                                <div className="card-header border-0">
                                    <div className="card-title">
                                        <h2>Etudes, formations et diplômes: </h2>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-5">
                                    <table class="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                        <tbody className='fs-5'>
                                            <tr>
                                                <th className='fw-bold'>Niveau scolaire :</th>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold'>Formation / Diplôme</th>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold'>Spécialité</th>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold'>Année</th>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>                                       
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card pt-4 mb-6 mb-xl-9">
                                <div className="card-header border-0">
                                    <div className="card-title">
                                        <h2>Expérience professionnelle </h2>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-5">
                                    <table class="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                        <tbody className='fs-5'>
                                            <tr>
                                                <th className='fw-bold'>Emploi-métier</th>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold'>Secteur d'activité</th>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold'>Durée (en mois)</th>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>                                 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                            <div className="card pt-4 mb-6 mb-xl-9">
                                <div className="card-header border-0">
                                    <div className="card-title">
                                        <h2>Expérience professionnelle </h2>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-5">
                                    <table class="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                        <tbody className='fs-5'>
                                            <tr>
                                                <td> 
                                                <p className='mb-1 fw-bold'>Employabilité:</p>
                                                (Profil demandé ou non sur le marché et chances d'insertion)
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td> 
                                                <p className='mb-1 fw-bold'>Autonomie en recherche d'emploi </p>
                                                (Niveaux de maitrise des techniques de recherche d'emploi, engagement de l'action, …)
                                                </td>
                                                <td>
                                                <p className='fw-bold'>NON </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Prédispositions entreprenariales:
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td> 
                                                    Besoins d'accompagnement  identifiés:
                                                </td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
                            <div className="card pt-9 mb-6 mb-xl-9">
                                <div className="card-body pt-0 pb-5 col-md-6 mx-auto">
                                    <table class="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                        <tbody className='fs-5'>
                                            <tr>
                                                <td className='mb-1 fw-bold'>Parcours:</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="card-body pt-0 pb-5 col-md-6 mx-auto">
                                    <table class="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                        <div className="card-header border-0">
                                            <div className="card-title">
                                                <h3>Emplois-métiers cibles idéntifiés (1 ou 2) pour les parcours A et B : </h3>
                                            </div>
                                        </div>
                                        <tbody className='fs-5'>
                                            <tr>
                                                <td className='mb-1 fw-bold'>Emploi-Métier 1 :</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className='mb-1 fw-bold'>Emploi-Métier 2 :</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="card pt-4 mb-6 mb-xl-9">
                                <div className="card-header border-0">
                                    <div className="card-title">
                                        <h2>Atelier </h2>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-5">
                                    <div className="row">
                                        <div className='col-xl-8'>
                                            <table class="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                                <thead className='fs-5'>
                                                    <th className='fw-bold'>Thèmes / Actions à réaliser avec l'appui du Conseiller Animateur</th>
                                                    <th className='fw-bold'>Date de réalisation</th>
                                                </thead>
                                                <tbody className='fs-6'>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            La préparation des écrits de postulation
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            La préparation d’un entretien d’embauche
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            L'envoi de candidatures spontanées aux entreprises
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            L’information sur le marché du travail
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            L’information sur les attentes et les exigences des entreprises
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Des notions sur la législation du travail nationale
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Identification des atouts et des insuffisances 
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Les secteurs d’activités porteurs
                                                        </td>
                                                        <td> - </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Les emplois métiers très demandés
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Les dispositifs de formation à l’emploi existants
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            L’entreprenariat, ses avantages, ses opportunités et ses exigences
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Les activités porteuses
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Les dispositifs d'accompagnement à l'entreprenariat
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <div className="col-md-6 py-4">
                                                <table className='table gy-5 gs-7 border rounded'>
                                                    <tbody>
                                                        <tr>
                                                            <td className='text-center'>
                                                                <img src="../../images/signature.png" alt="icon" />
                                                                <hr className='border' />
                                                                Signature du conseiller Animateur
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className='col-xl-4'>
                                            <table className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                                <thead className='fw-bold fs-5'>
                                                    <th>Actions à réaliser en autonome</th>
                                                </thead>
                                                <tbody className='fs-6'>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <div className="col-md-6 col-xl-12 py-4">
                                                <table className='table gy-5 gs-7 border rounded'>
                                                    <tbody>
                                                        <tr>
                                                            <td className='text-center'>
                                                                <img src="../../images/signature.png" alt="icon" />
                                                                <hr className='border' />
                                                                Signature du conseiller Animateur
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    </>
  )
}

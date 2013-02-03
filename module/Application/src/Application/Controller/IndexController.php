<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2012 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController,
    Application\Model,
    Doctrine\ORM\EntityManager;



class IndexController extends AbstractActionController
{
    /**
     * @var EntityManager
     */
    protected $em;

    public function setEntityManager(EntityManager $em) {
        $this->em = $em;
    }

    public function getEntityManager() {
        if(null === $this->em) {
            $this->em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
        }
        return $this->em;
    }

    public function indexAction()
    {
        // echo 'Backend/Index';
        //        $sm = $this->getServiceLocator();
//
//        $categoryTable = $sm->get('Application\Model\CategoryTable');
//        $categories = $categoryTable->fetchAll();
//        print_r($categories);
        //$categoryTable = $this->getServiceLocator()->get('Table\Category');
        //print_r($categoryTable);
        //print_r($categoryTable->fetchAll());
        //return new ViewModel();
        $categories = $this->getEntityManager()->getRepository('Application\Entity\Category')->findAll();
        print_r($categories);

    }

}

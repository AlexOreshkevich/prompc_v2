<?php
namespace Backend\Direct;

use Zend\ServiceManager\ServiceLocatorAwareInterface,
    Zend\ServiceManager\ServiceLocatorInterface,
    Doctrine\ORM\EntityManager;

abstract class Entity implements ServiceLocatorAwareInterface, DirectInterface
{
    /**
     * @var EntityManager
     */
    protected $em;
    protected $services;

    public function setEntityManager(EntityManager $em) {
        $this->em = $em;
    }

    public function getEntityManager() {
        if(null === $this->em) {
            $this->em = $this->getServiceLocator()->get('Doctrine\ORM\EntityManager');
        }
        return $this->em;
    }

    public function setServiceLocator(ServiceLocatorInterface $serviceLocator)
    {
        $this->services = $serviceLocator;
    }

    public function getServiceLocator()
    {
        return $this->services;
    }

    protected function checkEntityClassName($entity) {
        return class_exists($entity);
    }

}